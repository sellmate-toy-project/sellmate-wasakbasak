from typing import Optional, Any
from .base import CRUDBase, SortType
from models.product_category import ProductCategory
from schemas.product_category_schema import ProductCategoryCreate
from sqlalchemy.orm import Session
from sqlalchemy import literal
from sqlalchemy.sql import text


class CRUDProductCategory(CRUDBase[ProductCategory, ProductCategoryCreate, None, None]):
    def get_by_name(
        self, db: Session, name: str
    ) -> Optional[ProductCategory]:
        return db.query(self.model).filter(self.model.name == name).first()

    def get_multi_with_deps(
        self,
        db: Session,
        sort: str = "id",
        sort_by: SortType = SortType.ASC
    ) -> Any:
        top_deps = db.query(self.model, literal(1).label('deps'))\
            .filter(self.model.owner_id == 0)\
            .cte('cte', recursive=True)
        bottom_deps = db.query(
            self.model,
            (top_deps.c.deps + 1).label('deps')
        ).join(top_deps, self.model.owner_id == top_deps.c.id)
        hierarchy_query = top_deps.union(bottom_deps)

        return db.query(hierarchy_query)\
            .order_by(text(f"{sort} {sort_by.value}"))

    def get_multi_by_owner(
        self,
        db: Session,
        owner_id: int,
        sort: str = "id",
        sort_by: SortType = SortType.ASC
    ) -> Any:
        return db.query(self.model)\
                .filter(self.model.owner_id == owner_id)\
                .order_by(text(f"{sort} {sort_by.value}"))

    def create_with_owner(
        self, db: Session, obj_in: ProductCategoryCreate, owner_id: int
    ) -> ProductCategory:
        db_obj = self.model(**obj_in, owner_id=owner_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj


product_category = CRUDProductCategory(ProductCategory)

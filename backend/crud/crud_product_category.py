from typing import Optional, List
from .base import CRUDBase
from models.product_category import ProductCategory
from schemas.product_category_schema import ProductCategoryCreate
from sqlalchemy.orm import Session


class CRUDProductCategory(CRUDBase[ProductCategory, ProductCategoryCreate, None]):
    def get_by_name(
        self, db: Session, name: str
    ) -> Optional[ProductCategory]:
        return db.query(self.model).filter(ProductCategory.name == name).first()

    def get_multi_by_owner(
        self,
        db: Session,
        owner_id: str,
        skip: int = 0,
        limit: int = 100,
    ) -> List[ProductCategory]:
        return db.query(self.model)\
                .filter(self.model.owner_id == owner_id)\
                .offset(skip)\
                .limit(limit)\
                .all()

    def create_with_owner(
        self, db: Session, obj_in: ProductCategoryCreate, owner_id: int
    ) -> ProductCategory:
        db_obj = self.model(**obj_in, owner_id=owner_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj


product_category = CRUDProductCategory(ProductCategory)

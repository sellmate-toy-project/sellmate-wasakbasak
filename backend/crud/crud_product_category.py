from typing import Optional, List
from .base import CRUDBase
from models.product_category import ProductCategory
from schemas.product_category_schema import ProductCategoryCreate
from sqlalchemy.orm import Session
from sqlalchemy.ext.compiler import compiles
from sqlalchemy.sql.expression import Insert


@compiles(Insert)
def prefix_inserts(insert, compiler, **kw):
    return compiler.visit_insert(insert.prefix_with("IGNORE"), **kw)


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
                .filter(ProductCategory.owner_id == owner_id)\
                .offset(skip)\
                .limit(limit)\
                .all()

    def create_with_owner(
        self, db: Session, obj_in: ProductCategoryCreate, owner_id: int
    ) -> ProductCategory:
        db_obj = self.model(**obj_in, owner_id=owner_id)
        db.add(db_obj)
        db.commit()
        return db_obj


product_category = CRUDProductCategory(ProductCategory)

from typing import Optional
from .base import CRUDBase, SortType
from models.product import Product
from schemas.product_schema import ProductCreate
from sqlalchemy.orm import Session, subqueryload
from models.product import StatusType
from sqlalchemy.sql import text


class CRUDProduct(CRUDBase[Product, ProductCreate, None, None]):
    def create(
        self, db: Session, obj_in: ProductCreate, product_category_id: int
    ) -> Product:
        db_obj = self.model(**obj_in, product_category_id=product_category_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def duplicate_check(
        self, db: Session, name: str, code: str
    ) -> Optional[Product]:
        return db.query(self.model)\
            .filter(self.model.name == name)\
            .filter(self.model.code == code)\
            .first()

    def get_product(
        self,
        db: Session,
        skip: int = 0,
        limit: int = 100,
        sort: str = "id",
        sort_by: SortType = "asc"
    ) -> list[Product]:
        return db.query(self.model)\
            .filter(self.model.status == StatusType.active)\
            .order_by(text(f"{sort} {sort_by.value}"))\
            .offset(skip)\
            .limit(limit)\
            .all()


product = CRUDProduct(Product)

from .base import CRUDBase
from models.product import Product
from schemas.product_schema import ProductCreate
from sqlalchemy.orm import Session


class CRUDProduct(CRUDBase[Product, ProductCreate, None]):
    def create(
        self, db: Session, obj_in: ProductCreate, product_category_id: int
    ) -> Product:
        db_obj = self.model(**obj_in, product_category_id=product_category_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj


product = CRUDProduct(Product)

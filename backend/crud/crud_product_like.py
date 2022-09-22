from .base import CRUDBase
from models.product_like import ProductLike
from sqlalchemy.orm import Session
from typing import Any


class CRUDProductLike(CRUDBase[ProductLike, None, None, None]):
    def check_product_like(
        self,
        db: Session,
        product_id: int,
        user_id: int
    ) -> ProductLike:
        return db.query(self.model)\
            .filter(self.model.user_id == user_id)\
            .filter(self.model.product_id == product_id)\
            .first()

    def create(
        self,
        db: Session,
        product_id: int,
        user_id: int
    ) -> ProductLike:
        db_obj = self.model(user_id=user_id, product_id=product_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def delete(
        self,
        db: Session,
        product_id: int,
        user_id: int
    ) -> Any:
        db.query(self.model)\
            .filter(self.model.user_id == user_id)\
            .filter(self.model.product_id == product_id)\
            .delete()
        db.commit()


product_like = CRUDProductLike(ProductLike)

from .base import CRUDBase
from models.product_like import ProductLike
from sqlalchemy.orm import Session
from typing import Any


class CRUDProductLike(CRUDBase[ProductLike, None, None, None]):
    def check_product_like(
        self, db: Session, product_id: int
    ) -> ProductLike:
        # TODO: user_id 값 세션에서 불러오도록 수정
        return db.query(self.model)\
            .filter(self.model.user_id == 1)\
            .filter(self.model.product_id == product_id)\
            .first()

    def create(
        self, db: Session, product_id: int
    ) -> ProductLike:
        # TODO: user_id 값 세션에서 불러오도록 수정
        db_obj = self.model(user_id=1, product_id=product_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def delete(
        self, db: Session, product_id: int
    ) -> Any:
        # TODO: user_id 값 세션에서 불러오도록 수정
        db.query(self.model)\
            .filter(self.model.user_id == 1)\
            .filter(self.model.product_id == product_id)\
            .delete()
        db.commit()


product_like = CRUDProductLike(ProductLike)

from .base import CRUDBase
from models.review_like import ReviewLike
from sqlalchemy.orm import Session
from typing import Any


class CRUDReviewLike(CRUDBase[ReviewLike, None, None, None]):
    def check_review_like(
        self, db: Session, review_id: int
    ) -> ReviewLike:
        # TODO: user_id 값 세션에서 불러오도록 수정
        return db.query(self.model)\
            .filter(self.model.user_id == 1)\
            .filter(self.model.review_id == review_id)\
            .first()

    def create(
        self, db: Session, review_id: int
    ) -> ReviewLike:
        # TODO: user_id 값 세션에서 불러오도록 수정
        db_obj = self.model(user_id=1, review_id=review_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def delete(
        self, db: Session, review_id: int
    ) -> Any:
        # TODO: user_id 값 세션에서 불러오도록 수정
        db.query(self.model)\
            .filter(self.model.user_id == 1)\
            .filter(self.model.review_id == review_id)\
            .delete()
        db.commit()


review_like = CRUDReviewLike(ReviewLike)

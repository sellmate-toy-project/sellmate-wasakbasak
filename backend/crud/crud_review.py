from typing import Optional

from fastapi import HTTPException
from .base import CRUDBase
from models.review import Review
from sqlalchemy.orm import Session
import schemas
import crud


class CRUDReview(CRUDBase[Review, None, None, None]):

    def get_reviews(self, db: Session, skip, limit, user_id, product_id) -> Review:
        reviews = crud.review.get_multi(db, skip, limit)

        if user_id:
            reviews = db.query(self.model)\
                .filter(Review.user_id == user_id)\
                .offset(skip)\
                .limit(limit)\
                .all()
            return reviews

        if product_id:
            reviews = db.query(self.model)\
                .filter(Review.product_id == product_id)\
                .offset(skip)\
                .limit(limit)\
                .all()
            return reviews

        return reviews

    def get_review(self, db: Session, review_id) -> Review:
        review = db.query(self.model).filter(Review.id == review_id).first()
        if not review:
            raise HTTPException(400, '리뷰가 존재하지 않습니다.')
        return review

    def create(self, db: Session, obj_in: schemas.ReviewCreate) -> Review:
        db_obj = self.model(**obj_in)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(self, db: Session, review_id, obj_in: schemas.ReviewUpdate) -> Review:
        db_obj = self.model(**obj_in)
        db.query(Review)\
            .filter(Review.id == review_id)\
            .update({"body": obj_in["body"]})
        db.commit()
        return db_obj

    def delete(self, db: Session, review_id) -> Review:

        review = db.query(self.model).filter(Review.id == review_id).first()
        if not review:
            raise HTTPException(400, '리뷰가 존재하지 않습니다.')
        else:
            db.query(Review)\
                .filter(Review.id == review_id)\
                .delete()
            db.commit()

        return review


review = CRUDReview(Review)

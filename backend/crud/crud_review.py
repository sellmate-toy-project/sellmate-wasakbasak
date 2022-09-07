from typing import Optional
from sqlalchemy.sql.functions import func
from fastapi import HTTPException
from .base import CRUDBase
from models.review import Review
from sqlalchemy.orm import Session
import schemas
import crud


class CRUDReview(CRUDBase[Review, None, None, None]):

    def get_reviews(self, db: Session, skip, limit, user_id, product_id, sort, sort_by) -> list[Review]:
        if user_id:
            reviews = db.query(self.model)\
                .filter(Review.user_id == user_id)\
                .order_by(f"{sort} {sort_by.value}")\
                .offset(skip)\
                .limit(limit)\
                .all()
            return reviews

        elif product_id:
            reviews = db.query(self.model)\
                .filter(Review.product_id == product_id)\
                .order_by(f"{sort} {sort_by.value}")\
                .offset(skip)\
                .limit(limit)\
                .all()
            return reviews

        else:
            reviews = crud.review.get_multi(db, skip, limit, sort, sort_by)

        return reviews


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
            .update({"body": obj_in["body"], "updated_at": func.now()})
        db.commit()
        return db_obj


    def delete(self, db: Session, review_id) -> Review:
        db.query(Review)\
            .filter(Review.id == review_id)\
            .delete()
        db.commit()


review = CRUDReview(Review)

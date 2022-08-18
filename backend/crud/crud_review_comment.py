from typing import Optional

from fastapi import HTTPException
from .base import CRUDBase
from models.review_comment import ReviewComment
from sqlalchemy.orm import Session
import schemas
import crud


class CRUDReviewComment(CRUDBase[ReviewComment, None, None, None]):

    def get_review_comments(self, db: Session, skip, limit, user_id, review_id) -> ReviewComment:
        review_comments = crud.review.get_multi(db, skip, limit)

        if user_id:
            review_comments = db.query(self.model)\
                .filter(ReviewComment.user_id == user_id)\
                .offset(skip)\
                .limit(limit)\
                .all()
            return review_comments

        if review_id:
            review_comments = db.query(self.model)\
                .filter(ReviewComment.review_id == review_id)\
                .offset(skip)\
                .limit(limit)\
                .all()
            return review_comments

        return review_comments


    def create(self, db: Session, obj_in: schemas.ReviewCommentCreate) -> ReviewComment:
        db_obj = self.model(**obj_in)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(self, db: Session, review_comment_id, obj_in: schemas.ReviewUpdate) -> ReviewComment:
        db_obj = self.model(**obj_in)
        db.query(ReviewComment)\
            .filter(ReviewComment.id == review_comment_id)\
            .update({"body": obj_in["body"]})
        db.commit()
        return db_obj

    def delete(self, db: Session, review_comment_id) -> ReviewComment:
        review_comment = db.query(self.model).filter(ReviewComment.id == review_comment_id).first()
        if not review_comment:
            raise HTTPException(400, '댓글이 존재하지 않습니다.')
        else:
            db.query(ReviewComment)\
                .filter(ReviewComment.id == review_comment_id)\
                .delete()
            db.commit()

        return review_comment


review_comment = CRUDReviewComment(ReviewComment)

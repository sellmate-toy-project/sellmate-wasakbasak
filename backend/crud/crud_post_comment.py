from typing import Optional
from fastapi import FastAPI, HTTPException
from .base import CRUDBase
from models.post_comment import PostComment
from sqlalchemy.orm import Session
from sqlalchemy.sql import text

import schemas


class CRUDPostComment(CRUDBase[PostComment, None, None, None]):
    def get_post_comments(self, db: Session, skip, limit, sort, sort_by, post_id) -> PostComment:
        if post_id:
            post_comments = db.query(self.model)\
                .filter(PostComment.post_id == post_id)\
                .order_by(text(f"{sort} {sort_by}"))\
                .offset(skip)\
                .limit(limit)\
                .all()
        else:
            raise HTTPException(status_code=500, detail="Post Not Exist.")

        return post_comments

    def create(self, db: Session, obj_in: schemas.PostCommentCreate) -> PostComment:
        db_obj = self.model(**obj_in)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(self, db: Session, post_comment_id, obj_in: schemas.PostCommentUpdate) -> PostComment:
        db_obj = self.model(**obj_in)
        db.query(self.model)\
            .filter(PostComment.id == post_comment_id)\
            .update({'body': obj_in['body']})

        db.flush()
        db.commit()
        return db_obj

    def delete(self, db: Session, post_comment_id: int) -> PostComment:
        post = db.query(self.model)\
            .filter(PostComment.id == post_comment_id)\
            .delete()

        db.flush()
        db.commit()
        return post


post_comment = CRUDPostComment(PostComment)


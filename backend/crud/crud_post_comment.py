from fastapi import FastAPI, HTTPException
from .base import CRUDBase
from models.post_comment import PostComment
from sqlalchemy.orm import Session
from sqlalchemy.sql import text

import schemas


class CRUDPostComment(CRUDBase[PostComment, None, None, None]):
    def get_post_comments(self, db: Session, sort, sort_by, post_id) -> PostComment:
        post_comments = db.query(self.model)\
            .filter(PostComment.post_id == post_id)\
            .order_by(text(f"{sort} {sort_by.value}"))

        return post_comments

    def create(self, db: Session, obj_in: schemas.PostCommentCreate) -> PostComment:
        db_obj = self.model(**obj_in)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)

        return db_obj

    def update(self, db: Session, post_comment_id, obj_in: schemas.PostCommentUpdate) -> PostComment:
        post_comments = db.query(self.model)\
            .filter(PostComment.id == post_comment_id)

        if post_comments.first():
            post_comments.update({'body': obj_in['body']})
        else:
            raise HTTPException(400, '찾을 수 없는 댓글 입니다.')

        db.flush()
        db.commit()

        return db.query(self.model)\
            .filter(PostComment.id == post_comment_id).first()

    def delete(self, db: Session, post_comment_id: int) -> PostComment:
        post_comments = db.query(self.model)\
            .filter(PostComment.id == post_comment_id)

        if post_comments.first():
            post_comments.delete()
        else:
            raise HTTPException(400, '이미 삭제 됐거나 존재 하지 않는 댓글 입니다.')

        db.flush()
        db.commit()

        return post_comments


post_comment = CRUDPostComment(PostComment)


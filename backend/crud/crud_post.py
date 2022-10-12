from fastapi import HTTPException
from .base import CRUDBase
from models.post import Post
from sqlalchemy.orm import Session
from sqlalchemy.sql import text

import schemas


class CRUDPost(CRUDBase[Post, None, None, None]):
    def get_posts(self, db: Session, sort, sort_by, user_id) -> Post:
        if user_id:
            posts = db.query(self.model)\
                .filter(Post.user_id == user_id)\
                .order_by(text(f"{sort} {sort_by.value}"))
        else:
            posts = db.query(self.model) \
                .order_by(text(f"{sort} {sort_by.value}"))

        return posts

    def create(self, db: Session, obj_in: schemas.PostCreate) -> Post:
        db_obj = self.model(**obj_in)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(self, db: Session, post_id, obj_in: schemas.PostUpdate) -> Post:
        db.query(self.model)\
            .filter(Post.id == post_id)\
            .filter(Post.is_deleted == 0)\
            .update({'body': obj_in['body'], 'title': obj_in['title']})

        db.flush()
        db.commit()

        return db.query(self.model) \
            .filter(Post.id == post_id).first()

    def delete(self, db: Session, post_id: int) -> Post:
        result = db.query(self.model)\
            .filter(Post.id == post_id)\
            .filter(Post.is_deleted == 0)\
            .update({'is_deleted': 1})

        if result == 0:
            raise HTTPException(400, '이미 삭제된 게시글 입니다.')

        db.flush()
        db.commit()

        return db.query(self.model)\
            .filter(Post.id == post_id).first()


post = CRUDPost(Post)


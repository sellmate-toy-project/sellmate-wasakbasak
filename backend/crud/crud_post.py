from typing import Optional
from .base import CRUDBase
from models.post import Post
from schemas.post_schema import PostCreate
from schemas.post_schema import PostUpdate
from sqlalchemy.orm import Session, Query


class CRUDPost(CRUDBase[Post, None, None]):
    def create(self, db: Session, obj_in: PostCreate) -> Post:
        db_obj = self.model(**obj_in)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(self, db: Session, post_id, obj_in: PostUpdate):
        post = (
            Query(Post).
                with_session(db).
                filter(Post.id == post_id).
                filter(Post.is_deleted == 0).
                first()
        )
        
        post.title = obj_in.title
        post.body = obj_in.body

        db.flush()
        db.commit()
        return post


post = CRUDPost(Post)


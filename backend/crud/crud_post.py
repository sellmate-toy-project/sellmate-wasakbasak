from typing import Optional
from .base import CRUDBase
from models.post import Post
from sqlalchemy.orm import Session
from schemas.user import PostCreate


class CRUDPost(CRUDBase[Post]):
    def create(self, db: Session, *, obj_in: PostCreate) -> Post:
        db_obj = Post(
            title=obj_in.title,
            body=obj_in.body,
            user_id=obj_in.user_id,
            is_superuser=obj_in.is_superuser,
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

user = CRUDPost(Post)

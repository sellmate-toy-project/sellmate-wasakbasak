from typing import Optional
from .base import CRUDBase
from models.post import Post
from schemas.post_schema import PostCreate
from sqlalchemy.orm import Session


class CRUDPost(CRUDBase[Post, None, None]):
    def create(self, db: Session, *, obj_in: PostCreate) -> Post:
        # db_obj = Post(
        #     title=obj_in.title,
        #     body=obj_in.body,
        #     user_id=obj_in.user_id,
        # )
        print(obj_in)
        db_obj = self.model(**obj_in)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj


post = CRUDPost(Post)


from typing import Optional
from .base import CRUDBase
from models.post import Post
from sqlalchemy.orm import Session

import schemas

class CRUDPost(CRUDBase[Post, None, None]):
    def create(self, db: Session, obj_in: schemas.PostCreate) -> Post:
        db_obj = self.model(**obj_in)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(self, db: Session, post_id, obj_in: schemas.PostUpdate) -> Post:
        db_obj = self.model(**obj_in)
        db.query(self.model)\
            .filter(Post.id == post_id)\
            .filter(Post.is_deleted == 0)\
            .update({'body': obj_in['body'], 'title': obj_in['title']})

        db.flush()
        db.commit()
        return db_obj

    def delete(self, db: Session, post_id: int) -> Post:
        post = db.query(self.model)\
        .filter(Post.id == post_id)\
        .update({'is_deleted': 1})

        db.flush()
        db.commit()
        return post


post = CRUDPost(Post)


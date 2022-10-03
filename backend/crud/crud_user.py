from typing import Optional

from .base import CRUDBase
from models.user import User
from sqlalchemy.orm import Session
from sqlalchemy.sql import text
from core.security import get_uid_hash, verify_uid
import schemas


class CRUDUser(CRUDBase[User, None, None, None]):
    def get_by_email(self, db: Session, email: str) -> Optional[User]:
        return db.query(User).filter(User.email == email).first()

    def authenticate(self, db: Session, uid: str, email: str) -> Optional[User]:
        user = self.get_by_email(db, email=email)
        if not user:
            return None
        if not verify_uid(uid, user.uid):
            return None
        return user

    def get_users(self, db: Session, skip, limit, floor, sort, sort_by) -> list[User]:
        if floor:
            users = db.query(self.model)\
                .filter(User.floor == floor.value)\
                .order_by(text(f"{sort} {sort_by.value}"))\
                .offset(skip)\
                .limit(limit)\
                .all()
        else:
            users = self.get_multi(db, skip, limit, sort, sort_by)

        return users

    def create(self, db: Session, obj_in: schemas.UserCreate) -> User:
        db_obj = self.model(
            uid=get_uid_hash(obj_in.uid),
            email=obj_in.email,
            nick_name=obj_in.nick_name,
            picture=obj_in.picture,
            floor=obj_in.floor.value,
            type=obj_in.type.value
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(self, db: Session, user_id, obj_in: schemas.UserUpdate) -> User:
        db_obj = self.model(**obj_in)
        db.query(User)\
            .filter(User.id == user_id)\
            .update({"nick_name": obj_in["nick_name"], "floor": obj_in["floor"]})
        db.commit()
        return db_obj


user = CRUDUser(User)

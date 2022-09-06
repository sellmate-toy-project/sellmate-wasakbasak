from typing import Optional

from fastapi import HTTPException
from .base import CRUDBase
from models.user import User
from sqlalchemy.orm import Session
import schemas
import crud


class CRUDUser(CRUDBase[User, None, None, None]):

    def get_by_email(self, db: Session, email: str) -> Optional[User]:
        return db.query(User).filter(User.email == email).first()

    def get_users(self, db: Session, skip, limit, floor, sort, sort_by) -> list[User]:
        users = crud.user.get_multi(db, skip, limit, sort, sort_by)
        if floor:
            users = db.query(self.model)\
                .filter(User.floor == floor.value)\
                .order_by(f"{sort} {sort_by.value}")\
                .offset(skip)\
                .limit(limit)\
                .all()
            return users
        return users

    def create(self, db: Session, obj_in: schemas.UserCreate) -> User:
        db_obj = self.model(**obj_in)
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

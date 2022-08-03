from typing import Optional

from fastapi import HTTPException
from .base import CRUDBase
from models.user import User
from sqlalchemy.orm import Session
import schemas
import crud


class CRUDUser(CRUDBase[User, None, None]):

    def get_by_email(self, db: Session, email: str) -> Optional[User]:
        return db.query(User).filter(User.email == email).first()

    def get_users(self, db: Session, skip, limit, floor) -> User:
        floorData = {
            3: 'thirdFloor',
            5: 'fiveFloor',
            11: 'ElevenFloor',
        }
        users = crud.user.get_multi(db, skip, limit)
        if floor:
            users = db.query(self.model)\
                .filter(User.floor == floorData[floor])\
                .offset(skip)\
                .limit(limit)\
                .all()
            return users

        return users

    def get_user(self, db: Session, user_id) -> User:
        user = db.query(self.model).filter(User.id == user_id).first()
        if not user:
            raise HTTPException(400, '회원 정보가 존재하지 않습니다.')
        return user

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

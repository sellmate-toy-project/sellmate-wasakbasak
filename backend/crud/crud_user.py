from typing import Optional
from .base import CRUDBase
from models.user import User
from sqlalchemy.orm import Session


class CRUDUser(CRUDBase[User]):
    def get_by_email(self, db: Session, email: str) -> Optional[User]:
        return db.query(User).filter(User.email == email).first()


user = CRUDUser(User)

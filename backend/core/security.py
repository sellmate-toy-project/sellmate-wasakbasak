from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt
from core.config import settings

uid_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_uid(plain_uid, hashed_uid):
    return uid_context.verify(plain_uid, hashed_uid)


def get_uid_hash(uid):
    return uid_context.hash(uid)


def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

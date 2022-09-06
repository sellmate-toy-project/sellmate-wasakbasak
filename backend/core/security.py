from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt

uid_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
# TODO : ENV 파일로 분리
# openssl rand -hex 32
SECRET_KEY = "d80b71594f3a92b9098914874174e13aff10d3936068689399a0d9c9fa35003f"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8


def verify_uid(plain_uid, hashed_uid):
    return uid_context.verify(plain_uid, hashed_uid)


def get_uid_hash(uid):
    return uid_context.hash(uid)


def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

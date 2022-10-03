from typing import Generator
from db.sessoin import SessionLocal
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi import Depends, HTTPException, status
import models
from jose import jwt, JWTError, ExpiredSignatureError
from sqlalchemy.orm import Session
import crud
from core.config import settings

security = HTTPBearer()


def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


def get_current_user(
    db: Session = Depends(get_db),
    token: HTTPAuthorizationCredentials = Depends(security)
) -> models.User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
    )

    try:
        token_data = jwt.decode(token.credentials, settings.SECRET_KEY, algorithms=settings.ALGORITHM)

        user = crud.user.get(db, id=token_data["id"])
        if not user:
            raise credentials_exception

        return user
    except ExpiredSignatureError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token has been expired")
    except JWTError:
        raise credentials_exception


def check_admin_user(
    current_user: models.User = Depends(get_current_user)
) -> models.User:
    if current_user.type.value != 'admin':
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="The user doesn't have enough privileges",
        )
    return current_user


def get_current_user(
    db: Session = Depends(get_db),
    token: HTTPAuthorizationCredentials = Depends(security)
) -> models.User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
    )

    try:
        token_data = jwt.decode(token.credentials, settings.SECRET_KEY, algorithms=settings.ALGORITHM)
    except JWTError:
        raise credentials_exception

    user = crud.user.get(db, id=token_data["id"])
    if not user:
        raise credentials_exception
    return user


def check_admin_user(
    current_user: models.User = Depends(get_current_user)
) -> models.User:
    if current_user.type.value != 'admin':
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="The user doesn't have enough privileges",
        )
    return current_user

from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from . import deps
from core.security import create_access_token
import crud
import schemas

router = APIRouter()


@router.post("/login", response_model=schemas.Token)
def login(
    email: str,
    uid: str,
    db: Session = Depends(deps.get_db),
) -> Any:
    user = crud.user.authenticate(db, uid=uid, email=email)
    result = {
        "access_token": "",
        "token_type": "bearer"
    }
    if user:
        result["access_token"] = create_access_token({"id": user.id})

    return result


@router.post("/join", response_model=schemas.User)
def join(
    data: schemas.UserCreate,
    db: Session = Depends(deps.get_db)
) -> Any:
    # TODO : type이 admin인 요청 예외처리 필요
    user = crud.user.get_by_email(db, email=data.email)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this user email already exists in the system.",
        )
    user = crud.user.create(db, obj_in=data)
    return user

from typing import Any
from fastapi import APIRouter, Depends, HTTPException, status, Body
from sqlalchemy.orm import Session
from . import deps
from core.security import create_access_token
import crud
import schemas

router = APIRouter()


@router.post("/login", response_model=schemas.Token)
def login(
    email: str = Body(),
    uid: str = Body(),
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
    # type이 admin인 요청 예외처리
    if data.type.value == 'admin':
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="가입할 수 없는 사용자 타입입니다.",
        )

    user = crud.user.get_by_email(db, email=data.email)
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="이미 가입된 회원정보입니다.",
        )
    user = crud.user.create(db, obj_in=data)
    return user

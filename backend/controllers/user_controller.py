from typing import Any, List, Optional
from fastapi import APIRouter, Depends, Body, HTTPException, Path, Query
from sqlalchemy.orm import Session
from . import deps

from controllers.response_entity import ResponseEntity
from starlette.requests import Request
from passlib.context import CryptContext

import schemas
import crud
import bcrypt

router = APIRouter()


@router.get("/", response_model=List[schemas.User])
def get_users(
    request: Request,
    skip: int = Query(1, ge=1),
    limit: int = Query(100, ge=1),
    floor: Optional[int] = Query(None),
    db: Session = Depends(deps.get_db),
) -> Any:
    users = crud.user.get_users(db, skip, limit, floor)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=users)


@router.get("/{user_id}", response_model=schemas.User)
def read_user_by_id(
    request: Request,
    user_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    obj = data.dict(exclude_unset=True)
    user = crud.user.get_user(db, user_id)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=user)


@router.post("/sign-up", response_model=schemas.UserCreate)
def sign_up(
    request: Request,
    data: schemas.UserCreate,
    db: Session = Depends(deps.get_db)
):
    obj = data.dict(exclude_unset=True)
    db_user = crud.user.get_by_email(db, email=obj["email"])

    if db_user:
        raise HTTPException(400, '이미 가입한 회원입니다.')
    else:
        bcrypt = CryptContext(db, schemas=["bcrypt"], deprecated="auto")
        obj.password = bcrypt.hash(obj.password)
        user = crud.user.create(db, obj)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=user)


@router.put("/{user_id}", response_model=schemas.UserUpdate)
def update_user(
    request: Request,
    user_id: int,
    data: schemas.UserUpdate,
    db: Session = Depends(deps.get_db),
):
    obj = data.dict(exclude_unset=True)

    bcrypt = CryptContext(db, schemas=["bcrypt"], deprecated="auto")

    if "password" in obj:
        obj["password"] = bcrypt.hash(obj["password"])

    user = crud.user.get(db, id=user_id)
    if user:
        user = crud.user.update(db, user_id, obj)
    else:
        raise HTTPException(400, '회원 정보가 존재하지 않습니다.')

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=user)

from typing import Any, List
from fastapi import APIRouter, Depends, Body, HTTPException, Path, Query
from sqlalchemy.orm import Session
from . import deps

from controllers.response_entity import ResponseEntity
from starlette.requests import Request
from passlib.context import CryptContext
from models.user import User

import schemas
import crud
import bcrypt
# import db

router = APIRouter()


@router.post("/sign-up", response_model=schemas.UserCreate)
def sign_up(
    request: Request,
    data: schemas.UserCreate,
    db: Session = Depends(deps.get_db)
):
    data = data.dict(exclude_unset=True)
    db_user = crud.user.get_by_email(db, email=data["email"])

    if db_user:
        raise HTTPException(400, '이미 가입한 회원입니다.')

    else:
        bcrypt = CryptContext(db, schemas=["bcrypt"], deprecated="auto")
        payload = ({
            "email": data["email"],
            "password": bcrypt.hash(data["password"]),
            "nick_name": data["nick_name"],
            "floor": data["floor"],
        })
        user = crud.user.create(db, payload)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=user)


@router.put("/{user_id}", response_model=schemas.UserUpdate)
def update_user(
    request: Request,
    user_id: int,
    data: schemas.UserUpdate,
    db: Session = Depends(deps.get_db),
):
    data = data.dict(exclude_unset=True)

    bcrypt = CryptContext(db, schemas=["bcrypt"], deprecated="auto")

    if "password" in data:
        data["password"] = bcrypt.hash(data["password"])

    user = db.crud.user.query().filter(User.id == user_id).first()
    if not user:
        raise HTTPException(400, '회원 정보가 존재하지 않습니다.')
    else:
        user = crud.user.update(db, data)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=user)


@router.get("/", response_model=List[schemas.User])
def get_users(
    request: Request,
    page: int = Query(1, ge=1),
    limit: int = Query(15, ge=1),
    floor: int = Query(None),
    db: Session = Depends(deps.get_db),
):
    users = crud.user.get_users(db, page, limit, floor)
    return users


@router.get("/{user_id}", response_model=schemas.User)
def read_user_by_id(
    user_id: int,
    db: Session = Depends(deps.get_db),
):
    user = crud.user.get_user(db, user_id)
    return user

from typing import Any
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from . import deps

from controllers.response_entity import ResponseEntity
from starlette.requests import Request

import schemas
import crud
import models
from models.user import FloorType

router = APIRouter()


@router.get("/", response_model=ResponseEntity)
def get_users(
    request: Request,
    db: Session = Depends(deps.get_db),
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1),
    floor: FloorType = Query(None),
    sort: str = Query("id"),
    sort_by: crud.SortType = crud.SortType.ASC,
    current_user: models.User = Depends(deps.check_admin_user)
) -> Any:
    users = crud.user.get_users(db, skip, limit, floor, sort, sort_by)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=users)


@router.get("/{user_id}", response_model=ResponseEntity)
def read_user_by_id(
    request: Request,
    user_id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.check_admin_user)
) -> Any:
    user = crud.user.get(db, id=user_id)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=user)


@router.put("/", response_model=ResponseEntity)
def update_user(
    request: Request,
    data: schemas.UserUpdate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user)
) -> Any:
    obj = data.dict(exclude_unset=True)
    user = crud.user.get(db, id=current_user.id)
    if user:
        user = crud.user.update(db, current_user.id, obj)
    else:
        raise HTTPException(400, '회원 정보가 존재하지 않습니다.')

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=user)

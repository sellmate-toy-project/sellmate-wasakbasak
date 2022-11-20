from controllers.response_entity import ResponseEntity
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from starlette.requests import Request
from typing import Any
from . import deps
from fastapi_pagination import Params
from fastapi_pagination.ext.sqlalchemy import paginate

import crud
import schemas
import models

router = APIRouter()


@router.get("/", response_model=ResponseEntity[schemas.Post])
def read_posts(
    request: Request,
    params: Params = Depends(),
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
    sort: str = "id",
    sort_by: crud.SortType = crud.SortType.ASC,
    user_id: int = None,
) -> Any:
    query = crud.post.get_posts(db, sort, sort_by, user_id)
    posts = paginate(query, params)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=posts.items,
        paging_meta={
            'total_page': round(query.count() / params.size),
            'current_page': params.page,
            'size': params.size,
        },
    )


@router.get("/{post_id}", response_model=ResponseEntity[schemas.Post])
def read_post(
    request: Request,
    post_id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    post = crud.post.get(db, id=post_id)

    if not post:
        raise HTTPException(400, '존재 하지 않는 게시글 입니다.')

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[post],
    )


@router.post("/", response_model=ResponseEntity[schemas.Post])
def create_item(
    request: Request,
    data: schemas.PostCreate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    obj = data.dict()
    post = crud.post.create(db, obj)
    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[post],
    )


@router.put("/{post_id}", response_model=ResponseEntity[schemas.Post])
def update(
    request: Request,
    post_id: int,
    data: schemas.PostUpdate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    obj = data.dict()
    post = crud.post.update(db, post_id, obj)
    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[post]
    )


@router.delete("/{post_id}", response_model=ResponseEntity[schemas.Post])
def delete(
    request: Request,
    post_id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    post = crud.post.delete(db, post_id)
    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[post]
    )

from controllers.response_entity import ResponseEntity
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from starlette.requests import Request
from typing import Any, List
from . import deps

import crud
import schemas

router = APIRouter()


@router.get("/", response_model=List[schemas.Post])
def read_posts(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    sort: str = "id",
    sort_by: crud.SortType = "asc",
    user_id: int = None
) -> Any:
    posts = crud.post.get_posts(db, skip, limit, sort, sort_by, user_id)
    return posts


@router.get("/{post_id}", response_model=schemas.Post)
def read_post(
    post_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    post = crud.post.get(db, id=post_id)
    return post


@router.post("/", response_model=ResponseEntity)
def create_item(
    request: Request,
    data: schemas.PostCreate,
    db: Session = Depends(deps.get_db),
) -> Any:
    obj = data.dict(exclude_unset=True)
    post = crud.post.create(db, obj)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=post)


@router.put("/{post_id}", response_model=ResponseEntity)
def update(
    request: Request,
    post_id: int,
    data: schemas.PostUpdate,
    db: Session = Depends(deps.get_db),
) -> Any:
    obj = data.dict(exclude_unset=True)
    post = crud.post.update(db, post_id, obj)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=post)


@router.delete("/{post_id}", response_model=ResponseEntity)
def delete(
    request: Request,
    post_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    post = crud.post.delete(db, post_id)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=post)
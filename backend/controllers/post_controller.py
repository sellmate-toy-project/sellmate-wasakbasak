from typing import Any, List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import deps
import schemas
import crud

router = APIRouter()


@router.get("/", response_model=List[schemas.Post])
def read_items(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(deps.get_db),
) -> Any:
    posts = crud.post.get_multi(db, skip=skip, limit=limit)
    return posts


@router.get("/{post_id}", response_model=schemas.Post)
def read_item(
    post_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    post = crud.post.get(db, id=post_id)
    return post


@router.post("/", response_model=schemas.Post)
def create_item(
    data: schemas.PostCreate,
    db: Session = Depends(deps.get_db),
) -> Any:
    post = crud.post.create(db, data)
    return post


@router.put("/{post_id}", response_model=schemas.Post)
def update(
    post_id: int,
    data: schemas.PostUpdate,
    db: Session = Depends(deps.get_db),
) -> Any:
    post = crud.post.update(db, post_id, data)
    return post

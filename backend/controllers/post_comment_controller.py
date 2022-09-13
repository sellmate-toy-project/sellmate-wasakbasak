from controllers.response_entity import ResponseEntity
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from starlette.requests import Request
from typing import Any, List
from . import deps

import schemas
import crud

router = APIRouter()


@router.get("/", response_model=List[schemas.PostComment])
def read_post_comments(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    sort: str = "id",
    sort_by: crud.SortType = crud.SortType.ASC,
    post_id: int = Query(...),
) -> Any:
    post_comments = crud.post_comment.get_post_comments(db, skip, limit, sort, sort_by, post_id)
    return post_comments


@router.post("/", response_model=schemas.PostComment)
def create(
    data: schemas.PostCommentCreate,
    db: Session = Depends(deps.get_db),
) -> Any:
    obj = data.dict()
    post_comments = crud.post_comment.create(db, obj)
    return post_comments


@router.put("/{post_comment_id}", response_model=ResponseEntity)
def update(
    request: Request,
    post_comment_id: int,
    data: schemas.PostCommentUpdate,
    db: Session = Depends(deps.get_db),
) -> Any:
    obj = data.dict()
    post_comments = crud.post_comment.update(db, post_comment_id, obj)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=post_comments)


@router.delete("/{post_comment_id}", response_model=ResponseEntity)
def delete(
    request: Request,
    post_comment_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    post_comments = crud.post_comment.delete(db, post_comment_id)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=post_comments)

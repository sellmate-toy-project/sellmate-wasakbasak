from typing import Any, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, Body
from sqlalchemy.orm import Session
from . import deps

from controllers.response_entity import ResponseEntity
from starlette.requests import Request

import schemas
import crud

router = APIRouter()


@router.get("/", response_model=ResponseEntity)
def get_review_comments(
    request: Request,
    db: Session = Depends(deps.get_db),
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1),
    # TODO : user_id 세션 추가 예정
    user_id: Optional[int] = Query(None),
    review_id: Optional[int] = Query(None),
    sort: str = Query("id"),
    sort_by: crud.SortType = crud.SortType.ASC,
) -> Any:
    reviews = crud.review_comment.get_review_comments(db, skip, limit, user_id, review_id, sort, sort_by)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=reviews)


@router.post("/", response_model=ResponseEntity)
def create(
    request: Request,
    data: schemas.ReviewCommentCreate,
    db: Session = Depends(deps.get_db)
):
    obj = data.dict(exclude_unset=True)
    review = crud.review_comment.create(db, obj)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=review)


@router.put("/{review_comment_id}", response_model=ResponseEntity)
def update_review(
    request: Request,
    review_comment_id: int,
    data: schemas.ReviewCommentUpdate,
    db: Session = Depends(deps.get_db),
):
    obj = data.dict(exclude_unset=True)
    review_comment = crud.review_comment.get(db, id=review_comment_id)
    if review_comment:
        review_comment = crud.review_comment.update(db, review_comment_id, obj)
    else:
        raise HTTPException(400, '댓글이 존재하지 않습니다.')

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=review_comment)


@router.delete("/{review_comment_id}", response_model=ResponseEntity)
def delete_review(
    request: Request,
    review_comment_id: int,
    db: Session = Depends(deps.get_db),
):
    result = crud.review_comment.delete(db, review_comment_id)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=result)

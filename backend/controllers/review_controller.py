from typing import Any, Optional, List
from fastapi import APIRouter, Depends, HTTPException, Query, Body
from sqlalchemy.orm import Session
from . import deps

from controllers.response_entity import ResponseEntity
from starlette.requests import Request

import schemas
import crud

router = APIRouter()


@router.get("/", response_model=List[schemas.Review])
def get_reviews(
    db: Session = Depends(deps.get_db),
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1),
    # TODO : user_id 세션 추가 예정
    user_id: Optional[int] = Query(None),
    review_id: Optional[int] = Query(None),
    sort: str = Query("id"),
    sort_by: crud.SortType = crud.SortType.ASC,
) -> Any:
    print(skip)
    reviews = crud.review.get_reviews(
        db, skip, limit, user_id, review_id, sort, sort_by)

    return reviews


@router.get("/{review_id}", response_model=ResponseEntity)
def read_review_by_id(
    request: Request,
    review_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    review = crud.review.get(db, id=review_id)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=review)


@router.post("/", response_model=ResponseEntity)
def create(
    request: Request,
    data: schemas.ReviewCreate,
    db: Session = Depends(deps.get_db)
):
    obj = data.dict(exclude_unset=True)
    review = crud.review.create(db, obj)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=review)


@router.put("/{review_id}", response_model=ResponseEntity)
def update_review(
    request: Request,
    review_id: int,
    data: schemas.ReviewUpdate,
    db: Session = Depends(deps.get_db),
):
    obj = data.dict(exclude_unset=True)
    review = crud.review.get(db, review_id)
    if review:
        review = crud.review.update(db, review_id, obj)
    else:
        raise HTTPException(400, '리뷰가 존재하지 않습니다.')

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=review)


@router.delete("/{review_id}", response_model=ResponseEntity)
def delete_review(
    request: Request,
    review_id: int,
    db: Session = Depends(deps.get_db),
):
    review = db.query(self.model).filter(Review.id == review_id).first()
    if not review:
        raise HTTPException(400, '리뷰가 존재하지 않습니다.')
    else:
        result = crud.review.delete(db, review_id)
    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=result)


@router.get("/{review_id}/like", response_model=schemas.Review)
def press_review_like(
    review_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    review_likes = crud.review_like.check_review_like(db, review_id)
    if review_likes:
        crud.review_like.delete(db, review_id)
    else:
        crud.review_like.create(db, review_id)

    review = crud.review.get(db, id=review_id)
    return review


@router.get("/comments", response_model=ResponseEntity)
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
    reviews = crud.review_comment.get_review_comments(
        db, skip, limit, user_id, review_id, sort, sort_by)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=reviews)


@router.post("/comments", response_model=ResponseEntity)
def create(
    request: Request,
    data: schemas.ReviewCommentCreate,
    db: Session = Depends(deps.get_db)
):
    obj = data.dict(exclude_unset=True)
    review = crud.review_comment.create(db, obj)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=review)


@router.put("/comments/{review_comment_id}", response_model=ResponseEntity)
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


@router.delete("/comments/{review_comment_id}", response_model=ResponseEntity)
def delete_review(
    request: Request,
    review_comment_id: int,
    db: Session = Depends(deps.get_db),
):
    result = crud.review_comment.delete(db, review_comment_id)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=result)

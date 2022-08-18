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
def get_reviews(
    request: Request,
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1),
    user_id: Optional[int] = Query(None),
    product_id: Optional[int] = Query(None),
    db: Session = Depends(deps.get_db),
) -> Any:
    reviews = crud.review.get_reviews(db, skip, limit, user_id, product_id)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=reviews)


@router.get("/{review_id}", response_model=ResponseEntity)
def read_review_by_id(
    request: Request,
    review_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    review = crud.review.get_review(db, review_id)
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
    review = crud.review.get(db, id=review_id)
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
    result = crud.review.delete(db, review_id)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=result)

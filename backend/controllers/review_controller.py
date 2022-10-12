from typing import Any, Optional, List
from fastapi import APIRouter, Depends, HTTPException, Query, Body
from sqlalchemy.orm import Session
from . import deps

from controllers.response_entity import ResponseEntity
from starlette.requests import Request

import schemas
import crud
import models

from starlette.requests import Request
from fastapi_pagination import Params
from fastapi_pagination.ext.sqlalchemy import paginate

router = APIRouter()


@router.get("/", response_model=ResponseEntity[schemas.Review])
def get_reviews(
    request: Request,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
    params: Params = Depends(),
    user_id: Optional[int] = Query(None),
    product_id: Optional[int] = Query(None),
    sort: str = Query("id"),
    sort_by: crud.SortType = crud.SortType.ASC,
) -> Any:
    print(params)
    query = crud.review.get_reviews(
        db, user_id=user_id, product_id=product_id, sort=sort, sort_by=sort_by)
    print(query)
    reviews = paginate(query, params)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=reviews.items,
        paging_meta={
            'total_page': round(query.count() / params.size),
            'current_page': params.page,
            'size': params.size,
        },
    )


@router.get("/{review_id}", response_model=ResponseEntity[schemas.Review])
def read_review_by_id(
    request: Request,
    review_id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    review = crud.review.get(db, id=review_id)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[review]
    )


@router.post("/", response_model=ResponseEntity)
def create(
    request: Request,
    data: schemas.ReviewCreate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
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
    current_user: models.User = Depends(deps.get_current_user),
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
    current_user: models.User = Depends(deps.get_current_user),
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
    current_user: models.User = Depends(deps.get_current_user),
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
    current_user: models.User = Depends(deps.get_current_user),
    params: Params = Depends(),
    user_id: Optional[int] = Query(None),
    review_id: Optional[int] = Query(None),
    sort: str = Query("id"),
    sort_by: crud.SortType = crud.SortType.ASC,
) -> Any:
    query = crud.review_comment.get_review_comments(
        db, user_id=user_id, review_id=review_id, sort=sort, sort_by=sort_by)
    reviews = paginate(query, params)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=reviews.items,
        paging_meta={
            'total_page': round(query.count() / params.size),
            'current_page': params.page,
            'size': params.size,
        },
    )


@router.post("/comments", response_model=ResponseEntity)
def create_review_comment(
    request: Request,
    data: schemas.ReviewCommentCreate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    obj = data.dict(exclude_unset=True)
    review = crud.review_comment.create(db, obj)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[review]
    )


@router.put("/comments/{review_comment_id}", response_model=ResponseEntity)
def update_review_comment(
    request: Request,
    review_comment_id: int,
    data: schemas.ReviewCommentUpdate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
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
    current_user: models.User = Depends(deps.get_current_user),
):
    result = crud.review_comment.delete(db, review_comment_id)

    return ResponseEntity(httpMethod=request.method, path=request.url.path, body=result)

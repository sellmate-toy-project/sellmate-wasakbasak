from controllers.response_entity import ResponseEntity
from fastapi import APIRouter, Depends, Query
from fastapi_pagination import Params
from fastapi_pagination.ext.sqlalchemy import paginate
from sqlalchemy.orm import Session
from starlette.requests import Request
from typing import Any
from . import deps

import schemas
import crud

router = APIRouter()


@router.get("/{post_id}/comments", response_model=ResponseEntity[schemas.PostComment])
def read_post_comments(
    request: Request,
    params: Params = Depends(),
    db: Session = Depends(deps.get_db),
    sort: str = "id",
    sort_by: crud.SortType = crud.SortType.ASC,
    post_id: int = Query(...),
) -> Any:
    query = crud.post_comment.get_post_comments(db, sort, sort_by, post_id)
    post_comments = paginate(query, params)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=post_comments.items,
        paging_meta={
            'total_page': round(query.count() / params.size),
            'current_page': params.page,
            'size': params.size,
        },
    )


@router.post("/comments", response_model=ResponseEntity[schemas.PostComment])
def create(
    request: Request,
    data: schemas.PostCommentCreate,
    db: Session = Depends(deps.get_db),
) -> Any:
    obj = data.dict()
    post_comments = crud.post_comment.create(db, obj)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[post_comments],
    )


@router.put("/comments/{post_comment_id}", response_model=ResponseEntity[schemas.PostComment])
def update(
    request: Request,
    post_comment_id: int,
    data: schemas.PostCommentUpdate,
    db: Session = Depends(deps.get_db),
) -> Any:
    obj = data.dict()
    post_comments = crud.post_comment.update(db, post_comment_id, obj)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[post_comments],
    )


@router.delete("/comments/{post_comment_id}", response_model=ResponseEntity[schemas.PostComment])
def delete(
    request: Request,
    post_comment_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    post_comments = crud.post_comment.delete(db, post_comment_id)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[post_comments],
    )

from typing import Any, List
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from . import deps
import schemas
import crud
import models
from controllers.response_entity import ResponseEntity
from starlette.requests import Request
from fastapi_pagination import Params
from fastapi_pagination.ext.sqlalchemy import paginate

router = APIRouter()


@router.get("/", response_model=ResponseEntity[schemas.Product])
def read_product(
    request: Request,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
    params: Params = Depends(),
    sort: str = "id",
    sort_by: crud.SortType = crud.SortType.ASC,
    filters: List[str] = Query([])
) -> Any:
    query = crud.product.get_product(db, sort=sort, sort_by=sort_by, filters=filters)
    products = paginate(query, params)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=products.items,
        paging_meta={
            'total_page': round(query.count() / params.size),
            'current_page': params.page,
            'size': params.size,
        },
    )


@router.get("/{product_id}", response_model=ResponseEntity[schemas.Product])
def read_product_by_id(
    request: Request,
    product_id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user)
) -> Any:
    product = crud.product.get(db, id=product_id)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[product],
    )


@router.get("/{product_id}/like", response_model=ResponseEntity[schemas.Product])
def press_product_like(
    request: Request,
    product_id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user)
) -> Any:
    product_likes = crud.product_like.check_product_like(db, product_id=product_id, user_id=current_user.id)
    if product_likes:
        crud.product_like.delete(db, product_id=product_id, user_id=current_user.id)
    else:
        crud.product_like.create(db, product_id=product_id, user_id=current_user.id)

    product = crud.product.get(db, id=product_id)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=[product],
    )

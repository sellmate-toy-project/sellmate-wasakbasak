from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import deps
import schemas
import crud
import models
from fastapi_pagination import Params
from fastapi_pagination.ext.sqlalchemy import paginate
from controllers.response_entity import ResponseEntity
from starlette.requests import Request

router = APIRouter()


@router.get("/", response_model=ResponseEntity[schemas.ProductCategory])
def read_product_categories(
    request: Request,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
    params: Params = Depends(),
    sort: str = "id",
    sort_by: crud.SortType = crud.SortType.ASC,
    owner_id: int = None,
) -> Any:
    if owner_id is not None:
        query = crud.product_category.get_multi_by_owner(db, owner_id=owner_id, sort=sort, sort_by=sort_by)
    else:
        query = crud.product_category.get_multi_with_deps(db)

    product_categories = paginate(query, params)

    return ResponseEntity(
        httpMethod=request.method,
        path=request.url.path,
        body=product_categories.items,
        paging_meta={
            'total_page': round(query.count() / params.size),
            'current_page': params.page,
            'size': params.size,
        },
    )

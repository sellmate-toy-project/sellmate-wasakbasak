from typing import Any, List, Optional
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import deps
import schemas
import crud

router = APIRouter()


@router.get("/", response_model=List[schemas.Product])
def read_product(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    sort: str = "id",
    sort_by: crud.SortType = "asc",
    category_name: str = None
) -> Any:
    # TODO: 상품 카테고리 필터 추가
    if category_name is not None:
        products = crud.product.get_product(db, skip=skip, limit=limit)
    else:
        products = crud.product.get_product(db, skip=skip, limit=limit, sort=sort, sort_by=sort_by)

    return products


@router.get("/{product_id}", response_model=schemas.Product)
def read_product_by_id(
    product_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    products = crud.product.get(db, id=product_id)
    return products

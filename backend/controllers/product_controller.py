from typing import Any, List
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
) -> Any:
    products = crud.product.get_multi(db, skip=skip, limit=limit)
    return products


@router.get("/{product_id}", response_model=schemas.Product)
def read_product_by_id(
    product_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    products = crud.product.get(db, id=product_id)
    return products

from typing import Any, List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import deps
import schemas
import crud

router = APIRouter()


@router.get("/", response_model=List[schemas.ProductCategory])
def read_product_categories(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    owner_id: int = None,
) -> Any:
    if owner_id:
        product_categories = crud.product_category.get_multi_by_owner(db, owner_id=owner_id, skip=skip, limit=limit)
    else:
        product_categories = crud.product_category.get_multi(db, skip=skip, limit=limit)

    return product_categories

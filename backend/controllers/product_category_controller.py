from typing import Any, List, Optional
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
    owner_id: Optional[int] = None,
) -> Any:
    if owner_id is not None:
        product_categories = crud.product_category.get_multi_by_owner(db, owner_id=owner_id, skip=skip, limit=limit)
    else:
        product_categories = crud.product_category.get_multi_with_deps(db, skip=skip, limit=limit)

    return product_categories

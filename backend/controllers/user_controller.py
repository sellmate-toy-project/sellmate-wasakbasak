from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import deps
import schemas
import crud

router = APIRouter()


@router.get("/")
def read_users():
    return {"message": "Hello World"}


@router.get("/{user_id}", response_model=schemas.User)
def read_user_by_id(
    user_id: int,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(deps.get_db),
) -> Any:
    user = crud.user.get(db, id=user_id)
    return user

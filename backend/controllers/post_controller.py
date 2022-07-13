from typing import Any, List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import deps
import schemas
import crud

router = APIRouter()

@router.get("/")
def read_posts():
    return {"message": "Post"}


@router.get("/{post_id}", response_model=schemas.Post)
def read_items(
    post_id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    post = crud.user.get(db, id=post_id)
    return post


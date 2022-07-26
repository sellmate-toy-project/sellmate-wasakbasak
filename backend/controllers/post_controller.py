from typing import Any, List
from schemas.post_schema import PostUpdate
from fastapi import APIRouter, Depends, Path, Body
from sqlalchemy.orm import Session
from . import deps
import schemas
import crud

router = APIRouter()


@router.get("/", response_model=List[schemas.Post])
def read_items(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(deps.get_db),
) -> Any:
    posts = crud.post.get_multi(db, skip=skip, limit=limit)
    return posts


@router.get("/{post_id}", response_model=schemas.Post)
def read_item(
    post_id: int = Path(...),
    db: Session = Depends(deps.get_db),
) -> Any:
    post = crud.post.get(db, id=post_id)
    return post


@router.post("/", response_model=schemas.Post)
def create_item(
    db: Session = Depends(deps.get_db),
    data=Body(
        example={
            "title" : "새로운게시글",
            "body" : "제가 작성한 글 좀 봐주시겠어요?",
            "user_id" : 1,
        },
    ),
) -> Any:
    post = crud.post.create(db, data)
    return post


@router.put("/{post_id}", response_model=schemas.Post)
async def update(
    db: Session = Depends(deps.get_db),
    post_id: int = Path(...),
    data: PostUpdate = Body(..., embed=False),
) -> Any:
    post = crud.post.update(db, post_id, data)

    return post
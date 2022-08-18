from typing import Optional
from pydantic import BaseModel


class ReviewCommentBase(BaseModel):
    body: Optional[str]
    review_id: Optional[int]
    user_id: Optional[int]
    parent_id: Optional[int]


class ReviewCommentCreate(BaseModel):
    user_id: int
    body: str
    review_id: int
    parent_id: Optional[int]

    class Config:
        schema_extra = {
            "example": {
                "user_id": 1,
                "body": "댓글내용",
                "review_id": 1,
                "parent_id": 1,
            }
        }


class ReviewCommentUpdate(BaseModel):
    body: str
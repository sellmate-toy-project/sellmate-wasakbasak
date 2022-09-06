from typing import Optional
from pydantic import BaseModel


class PostCommentBase(BaseModel):
    id: Optional[int]
    user_id: Optional[int]
    post_id: Optional[int]
    body: Optional[str]
    parent_id: Optional[int]


class PostCommentCreate(BaseModel):
    user_id: int
    post_id: int
    body: str
    parent_id: Optional[int]

    class Config:
        schema_extra = {
            "example": {
                "user_id": 1,
                "post_id": 3,
                "body": "너무 재밌는 글이군요!",
                "parent_id": 1
            }
        }


class PostCommentUpdate(BaseModel):
    body: str


class PostCommentInDBBase(PostCommentBase):
    user_id: int
    post_id: int
    body: str
    parent_id: Optional[int]

    class Config:
        orm_mode = True


class PostComment(PostCommentInDBBase):
    class Config:
        schema_extra = {
            "example": {
                "id": 2,
                "user_id": 1,
                "post_id": 3,
                "body": "너무 재밌는 글이군요!",
                "parent_id": 1
            }
        }


class PostCommentInDB(PostCommentInDBBase):
    pass

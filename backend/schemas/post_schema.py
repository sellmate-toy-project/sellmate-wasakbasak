from typing import Optional
from pydantic import BaseModel


class PostBase(BaseModel):
    user_id: Optional[int]
    title: Optional[str]
    body: Optional[str]


class PostCreate(BaseModel):
    user_id: int
    title: str
    body: str

    class Config:
        schema_extra = {
            "example": {
                "title": "새로운게시글",
                "body": "제가 작성한 글 좀 봐주시겠어요?",
                "user_id": 1,
            }
        }


class PostUpdate(BaseModel):
    title: Optional[str]
    body: Optional[str]


class PostInDBBase(PostBase):
    id: int
    user_id: int
    title: str
    body: str

    class Config:
        orm_mode = True


class Post(PostInDBBase):
    pass


class PostInDB(PostInDBBase):
    pass

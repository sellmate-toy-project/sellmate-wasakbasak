from typing import Optional
from pydantic import BaseModel


class PostBase(BaseModel):
    body: Optional[str]
    user_id: Optional[int]


class PostCreate(BaseModel):
    user_id: int
    body: str


class PostUpdate(BaseModel):
    body: str

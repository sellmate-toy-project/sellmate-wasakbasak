from typing import Optional
from pydantic import BaseModel

class PostBase(BaseModel):
  id: Optional[int]
  body: Optional[str]
  user_id: Optional[int]
  created_at: Optional[datetime.datetime]


class PostCreate(BaseModel):
  user_id: int
  body: str


class PostUpdate(BaseModel):
  body: str


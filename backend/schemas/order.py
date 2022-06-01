from typing import Optional
from pydantic import BaseModel

class OrderBase(BaseModel):
  id: Optional[int]
  product_id: Optional[int]
  user_id: Optional[int]
  ordered_at: Optional[datetime.datetime]


class OrderCreate(BaseModel):
  user_id: int
  product_id: int



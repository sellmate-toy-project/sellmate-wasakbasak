from typing import Optional
from pydantic import BaseModel


class OrderBase(BaseModel):
    product_id: Optional[int]
    user_id: Optional[int]


class OrderCreate(BaseModel):
    user_id: int
    product_id: int

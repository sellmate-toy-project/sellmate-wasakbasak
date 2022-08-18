from typing import Optional
from pydantic import BaseModel


class ReviewBase(BaseModel):
    body: Optional[str]
    product_id: Optional[int]
    user_id: Optional[int]


class ReviewCreate(BaseModel):
    user_id: int
    body: str
    product_id: int

    class Config:
        schema_extra = {
            "example": {
                "user_id": 1,
                "product_id": 1,
                "body": "리뷰내용",
            }
        }


class ReviewUpdate(BaseModel):
    body: str

from typing import Optional
from pydantic import BaseModel
from .review_like_schema import ReviewLike


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


class ReviewInDBBase(ReviewBase):
    id: int
    body: str
    user_id: int
    product_id: int
    review_likes: list[ReviewLike]

    class Config:
        orm_mode = True



class Review(ReviewInDBBase):
    class Config:
        schema_extra = {
            "example": {
                "id": "리뷰 id",
                "user_id": "사용자 id",
                "product_id": "상품 id",
                "body": "리뷰 내용",
                "review_likes": ReviewLike.Config.schema_extra.get("example")
            }
        }


class ReviewInDB(ReviewInDBBase):
    pass


class ReviewInDBBase(ReviewBase):
    id: int
    body: str
    user_id: int
    product_id: int
    review_likes: list[ReviewLike]

    class Config:
        orm_mode = True



class Review(ReviewInDBBase):
    class Config:
        schema_extra = {
            "example": {
                "id": "리뷰 id",
                "user_id": "사용자 id",
                "product_id": "상품 id",
                "body": "리뷰 내용",
                "review_likes": ReviewLike.Config.schema_extra.get("example")
            }
        }


class ReviewInDB(ReviewInDBBase):
    pass

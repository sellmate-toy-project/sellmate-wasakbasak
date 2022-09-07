from typing import Optional
from pydantic import BaseModel


class ReviewLikeBase(BaseModel):
    user_id: Optional[int] = None
    review_id: Optional[int] = None


class ReviewLikeCreate(ReviewLikeBase):
    pass


class ReviewLikeUpdate(ReviewLikeBase):
    pass


class ReviewLikeInDBBase(ReviewLikeBase):
    user_id: int
    review_id: int

    class Config:
        orm_mode = True


class ReviewLike(ReviewLikeInDBBase):
    class Config:
        schema_extra = {
            "example": {
                "user_id": "사용자 id",
                "review_id": "리뷰 id"
            }
        }


class ReviewLikeInDB(ReviewLikeInDBBase):
    pass

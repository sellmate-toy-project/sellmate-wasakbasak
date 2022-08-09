from typing import Optional
from pydantic import BaseModel


class ProductLikeBase(BaseModel):
    user_id: Optional[int] = None
    product_id: Optional[int] = None


class ProductLikeCreate(ProductLikeBase):
    user_id: int
    product_id: int


class ProductLikeUpdate(ProductLikeBase):
    pass


class ProductLikeInDBBase(ProductLikeBase):
    user_id: int
    product_id: int

    class Config:
        orm_mode = True


class ProductLike(ProductLikeInDBBase):
    class Config:
        schema_extra = {
            "example": {
                "user_id": "사용자 일련번호",
                "product_id": "상품 일련번호"
            }
        }


class ProductLikeInDB(ProductLikeInDBBase):
    pass

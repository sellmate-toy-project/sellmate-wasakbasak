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
    pass


class ProductLikeInDB(ProductLikeInDBBase):
    pass

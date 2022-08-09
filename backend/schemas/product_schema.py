from typing import Optional
from pydantic import BaseModel
from models.product import StatusType
from .product_like_schema import ProductLike


class ProductBase(BaseModel):
    name: Optional[str] = None
    code: Optional[str] = None
    desc: Optional[str] = None
    price: Optional[int] = None
    status: Optional[StatusType] = None


class ProductCreate(ProductBase):
    name: str
    code: str
    desc: str
    price: int
    status: StatusType


class ProductUpdate(ProductBase):
    name: str
    code: str
    desc: str
    price: int
    status: StatusType


class ProductInDBBase(ProductBase):
    id: int
    name: str
    code: str
    desc: str
    price: int
    status: StatusType
    product_category_id: int
    product_likes: list[ProductLike]

    class Config:
        orm_mode = True


class Product(ProductInDBBase):
    pass


class ProductInDB(ProductInDBBase):
    pass

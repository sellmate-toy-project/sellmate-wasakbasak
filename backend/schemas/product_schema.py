from typing import Optional
from pydantic import BaseModel
from models.product import StatusType


class ProductBase(BaseModel):
    name: Optional[str] = None
    desc: Optional[str] = None
    price: Optional[int] = None
    status: Optional[StatusType] = None


class ProductCreate(ProductBase):
    name: str
    desc: str
    price: int
    status: StatusType


class ProductUpdate(ProductBase):
    name: str
    desc: str
    price: int
    status: StatusType


class ProductInDBBase(ProductBase):
    id: int
    name: str
    desc: str
    price: int
    status: StatusType
    product_category_id: int

    class Config:
        orm_mode = True


class Product(ProductInDBBase):
    pass


class ProductInDB(ProductInDBBase):
    pass

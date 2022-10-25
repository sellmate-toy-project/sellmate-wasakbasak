from typing import Optional
from pydantic import BaseModel
from models.product import StatusType
from .product_like_schema import ProductLike
from .product_category_schema import ProductCategory


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
    product_category: ProductCategory
    product_likes: list[ProductLike]

    class Config:
        orm_mode = True


class Product(ProductInDBBase):
    class Config:
        schema_extra = {
            "example": {
                "id": "상품 일련번호",
                "name": "상품명",
                "code": "판매처 상품코드",
                "desc": "상품 이미지",
                "price": "상품 금액",
                "status": "상품 상태",
                "product_category": ProductCategory.Config.schema_extra.get("example"),
                "product_likes": ProductLike.Config.schema_extra.get("example")
            }
        }


class ProductInDB(ProductInDBBase):
    pass

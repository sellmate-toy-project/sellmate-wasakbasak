from typing import Optional
from pydantic import BaseModel


class ProductCategoryBase(BaseModel):
    name: Optional[str] = None
    code: Optional[str] = None


class ProductCategoryCreate(ProductCategoryBase):
    name: str
    code: str


class ProductCategoryUpdate(ProductCategoryBase):
    pass


class ProductCategoryInDBBase(ProductCategoryBase):
    id: int
    name: str
    code: Optional[str]
    owner_id: Optional[int]

    class Config:
        orm_mode = True


class ProductCategory(ProductCategoryInDBBase):
    deps: Optional[int]

    class Config:
        schema_extra = {
            "example": {
                "id": "상품 카테고리 일련번호",
                "name": "상품 카테고리명",
                "code": "판매처 상품 카테고리 코드",
                "owner_id": "부모 카테고리 일련번호",
                "deps": "상품 카테고리 분류"
            }
        }


class ProductCategoryInDB(ProductCategoryInDBBase):
    pass

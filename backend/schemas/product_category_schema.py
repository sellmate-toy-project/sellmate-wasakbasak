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


class ProductCategoryInDB(ProductCategoryInDBBase):
    pass

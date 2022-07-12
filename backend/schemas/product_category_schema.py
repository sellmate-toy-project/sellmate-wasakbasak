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
    code: str
    owner_id: int

    class Config:
        orm_mode = True


class ProductCategory(ProductCategoryInDBBase):
    pass


class ProductCategoryInDB(ProductCategoryInDBBase):
    pass

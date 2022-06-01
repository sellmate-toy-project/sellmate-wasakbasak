from typing import Optional
from pydantic import BaseModel
from pydantic.networks import EmailStr


class UserBase(BaseModel):
  id: Optional[int] = None
  email: Optional[EmailStr] = None
  nick_name: Optional[str] = None
  floor: Optional[int] = None


class UserCreate(BaseModel):
  email: EmailStr
  name: str
  password: str


class UserUpdate(BaseModel):
  password: Optional[str] = None


class UserInDBBase(UserBase):
    id: int
    email: str
    floor: int

    class Config:
        orm_mode = True


class User(UserInDBBase):
    class Config:
        orm_mode = True


class UserInDB(UserInDBBase):
    hashed_password: str



from typing import Optional
from pydantic import BaseModel, EmailStr
from models.user import FloorType


class UserBase(BaseModel):
    email: Optional[EmailStr] = None
    nick_name: Optional[str] = None
    floor: FloorType = None


class UserCreate(UserBase):
    email: EmailStr
    nick_name: str
    floor: FloorType
    password: str


class UserUpdate(UserBase):
    password: Optional[str] = None


class UserInDBBase(UserBase):
    id: int
    email: EmailStr
    nick_name: str
    floor: FloorType

    class Config:
        orm_mode = True


class User(UserInDBBase):
    pass


class UserInDB(UserInDBBase):
    hashed_password: str

from typing import Optional
from pydantic import BaseModel, EmailStr
from models.user import FloorType, UserType


class UserBase(BaseModel):
    email: Optional[EmailStr] = None
    nick_name: Optional[str] = None
    picture: Optional[str] = None
    floor: FloorType
    type: Optional[UserType] = None


class UserCreate(UserBase):
    uid: str
    email: EmailStr
    nick_name: str
    floor: FloorType
    type: UserType


class UserUpdate(UserBase):
    nick_name: Optional[str]
    floor: FloorType

    class Config:
        schema_extra = {
            "example": {
                "nick_name": "nick_name",
                "floor": 3,
            }
        }


class UserInDBBase(UserBase):
    id: int
    email: EmailStr
    nick_name: str
    picture: str
    floor: FloorType

    class Config:
        orm_mode = True


class User(UserInDBBase):
    pass


class UserInDB(UserInDBBase):
    pass

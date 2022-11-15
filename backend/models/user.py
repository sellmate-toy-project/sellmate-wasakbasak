import enum
from sqlalchemy import Column, Integer, String, TIMESTAMP, Enum
from sqlalchemy.sql.functions import func
from sqlalchemy.orm import relationship
from db.base_class import Base


class FloorType(enum.Enum):
    ThirdFloor = "3"
    FiveFloor = "5"
    ElevenFloor = "11"


class UserType(enum.Enum):
    admin = 'admin'
    basic = 'basic'


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    uid = Column(String(255), nullable=False)
    email = Column(String(50), unique=True, index=True, nullable=False)
    nick_name = Column(String(100), nullable=False)
    picture = Column(String(255))
    floor = Column(Enum(FloorType), nullable=False)
    type = Column(Enum(UserType), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now())

    reviews = relationship("Review", back_populates="user")
    product_likes = relationship("ProductLike", back_populates="user")
    review_likes = relationship("ReviewLike", back_populates="user")
    orders = relationship("Order", back_populates="user")
    posts = relationship("Post", back_populates="user")
    post_comments = relationship("PostComment", back_populates="user")
    review_comments = relationship("ReviewComment", back_populates="user")

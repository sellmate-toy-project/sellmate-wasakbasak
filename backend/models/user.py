from sqlalchemy import Column, Integer, String, TIMESTAMP, Enum
from sqlalchemy.sql.functions import func
from sqlalchemy.orm import relationship
from ..db.base_class import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    nick_name = Column(String, nullable=False)
    floor = Column(Enum([3, 5, 11]), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now())

    reviews = relationship("Review", back_populates="users")
    product_likes = relationship("ProductLike", back_populates="users")
    review_likes = relationship("ReviewLike", back_populates="users")

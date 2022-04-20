from sqlalchemy import Column, Integer, String, TIMESTAMP
from sqlalchemy.sql.functions import func
from sqlalchemy.orm import relationship
from ..db.database import Base


class Users(Base):
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    nick_name = Column(String, nullable=False)
    floor = Column(nullable=False)  # type setting
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now())

    product_reviews = relationship("ProductReview", back_populates="users")
    likes = relationship("Like", back_populates="users")

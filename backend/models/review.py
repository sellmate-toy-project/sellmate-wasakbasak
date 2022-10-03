from sqlalchemy import Column, Integer, String, TIMESTAMP
from sqlalchemy.sql.functions import func
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey
from db.base_class import Base


class Review(Base):
    __tablename__ = "reviews"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    body = Column(String(1000), nullable=False)
    product_id = Column(Integer, ForeignKey("products.id"))
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now())

    user = relationship("User", back_populates="reviews")
    product = relationship("Product", back_populates="reviews")
    review_comments = relationship("ReviewComment", back_populates="review")
    review_likes = relationship("ReviewLike", back_populates="review")
    review_likes = relationship("ReviewLike", back_populates="review")

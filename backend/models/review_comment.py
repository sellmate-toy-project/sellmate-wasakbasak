from sqlalchemy import Column, Integer, String, ForeignKey, TIMESTAMP
from sqlalchemy.sql.functions import func
from db.base_class import Base
from sqlalchemy.orm import relationship


class ReviewComment(Base):
    __tablename__ = "review_comments"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    review_id = Column(Integer, ForeignKey("reviews.id"))
    body = Column(String(255), nullable=False)
    parent_id = Column(Integer, nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now())

    user = relationship("User", back_populates="review_comments")
    review = relationship("Review", back_populates="review_comments")

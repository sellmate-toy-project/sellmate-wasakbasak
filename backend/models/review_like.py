from sqlalchemy import Column, Integer, PrimaryKeyConstraint
from sqlalchemy.orm import relationship
from sqlalchemy.schema import ForeignKey
from db.base_class import Base


class ReviewLike(Base):
    __tablename__ = "review_likes"
    __table_args__ = (
        PrimaryKeyConstraint("user_id", "review_id", name="pk_user_review_id"),
    )
    user_id = Column(Integer, ForeignKey("users.id"))
    review_id = Column(Integer, ForeignKey("reviews.id"))

    user = relationship("User", back_populates="review_likes")
    review = relationship("Review", back_populates="review_likes")
    review = relationship("Review", back_populates="review_likes")

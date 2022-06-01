from sqlalchemy import Column, Integer
from sqlalchemy.orm import relationship
from sqlalchemy.schema import ForeignKey
from ..db.base_class import Base


class ReviewLike(Base):
    __tablename__ = "review_likes"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    review_id = Column(Integer, ForeignKey("reviews.id"))

    users = relationship("User", back_populate="review_likes")

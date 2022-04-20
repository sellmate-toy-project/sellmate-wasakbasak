from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey
from ..db.database import Base


class ProductReviews(Base):
    review_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    context = Column(String, nullable=True)
    parent_id = Column(Integer)
    user_id = Column(Integer, ForeignKey("users.id"))

    user = relationship("User", back_populates="product_reviews")
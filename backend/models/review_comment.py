from sqlalchemy import Column, Integer, String, ForeignKey
from db.base_class import Base


class ReviewComment(Base):
    __tablename__ = "review_comments"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    body = Column(String(255), nullable=False)
    parent_id = Column(Integer, nullable=True)

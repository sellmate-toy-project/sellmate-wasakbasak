from sqlalchemy import Column, Integer, String, ForeignKey
from ..db.database import Base


class PostComment(Base):
    __table__ = "post_comments"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    body = Column(String, nullable=False)
    parent_id = Column(Integer, nullable=True)



class ReviewComment(Base):
    __tablename__ = "review_comments"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    body = Column(String, nullable=False)
    parent_id = Column(Integer, nullable=True)



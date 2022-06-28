from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean
from sqlalchemy.sql.functions import func
from sqlalchemy.schema import ForeignKey
from db.base_class import Base
from sqlalchemy.orm import relationship


class Post(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String(200), nullable=False)
    body = Column(String(1000), nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, onupdate=func.now())
    is_Deleted = Column(Boolean(), nullable=True, default=False)
    user = relationship("User", back_populates="posts")
    post_comments = relationship("PostComment", back_populates="post")

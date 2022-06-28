from sqlalchemy import Column, Integer, String, ForeignKey
from db.base_class import Base
from sqlalchemy.orm import relationship


class PostComment(Base):
    __tablename__ = "post_comments"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    post_id = Column(Integer, ForeignKey("posts.id"))
    body = Column(String(255), nullable=False)
    parent_id = Column(Integer, nullable=True)

    user = relationship("User", back_populates="post_comments")
    post = relationship("Post", back_populates="post_comments")

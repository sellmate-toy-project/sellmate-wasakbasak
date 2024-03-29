from fastapi import APIRouter
from controllers import *

api_router = APIRouter()

api_router.include_router(auth_controller.router,
                          prefix="/auth", tags=["auth"])
api_router.include_router(user_controller.router,
                          prefix="/users", tags=["users"])
api_router.include_router(collect_controller.router,
                          prefix="/collect", tags=["collect"])
api_router.include_router(post_controller.router,
                          prefix="/posts", tags=['posts'])
api_router.include_router(post_comment_controller.router,
                          prefix="/post", tags=['post_comments'])
api_router.include_router(product_category_controller.router,
                          prefix="/products/categories", tags=['products'])
api_router.include_router(product_controller.router,
                          prefix="/products", tags=['products'])
api_router.include_router(review_controller.router,
                          prefix="/reviews", tags=["reviews"])

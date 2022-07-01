from fastapi import APIRouter
from controllers import user_controller
from controllers import collect_controller

api_router = APIRouter()
api_router.include_router(user_controller.router, prefix="/users", tags=["users"])
api_router.include_router(collect_controller.router, prefix="/collect", tags=["collect"])
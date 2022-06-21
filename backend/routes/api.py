from fastapi import APIRouter
from controllers import user_controller

api_router = APIRouter()
api_router.include_router(user_controller.router, prefix="/users", tags=["users"])

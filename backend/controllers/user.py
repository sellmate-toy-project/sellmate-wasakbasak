from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def read_users():
    return {"message": "Hello World"}


@router.get("/{user_id}")
def read_user_by_id():
    return {'user'}

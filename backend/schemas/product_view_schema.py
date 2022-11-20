from datetime import datetime
from pydantic import BaseModel
from models.product import StatusType


class ProductView(BaseModel):
    id: int
    name: str
    code: str
    desc: str
    price: int
    status: StatusType
    created_at: datetime
    updated_at: datetime
    total_like_count: int
    third_floor_like_count: int
    five_floor_like_count: int
    eleven_floor_like_count: int
    total_review_count: int
    total_sales_count: int
    third_floor_sales_count: int
    five_floor_sales_count: int
    eleven_floor_sales_count: int
    main_category: int
    middle_category: int
    sub_category: int

    class Config:
        orm_mode = True
        schema_extra = {
            "example": {
                "id": "상품 일련번호",
                "name": "상품명",
                "code": "판매처 상품코드",
                "desc": "상품 이미지",
                "price": "상품 금액",
                "status": "상품 상태",
                "created_at": "상품 등록 일자",
                "updated_at": "상품 수정 일자",
                "total_like_count": "총 좋아요 수",
                "third_floor_like_count": "3층 좋아요 수",
                "five_floor_like_count": "5층 좋아요 수",
                "eleven_floor_like_count": "11층 좋아요 수",
                "total_review_count": "총 리뷰 수",
                "total_sales_count": "총 판매량",
                "third_floor_sales_count": "3층 판매량",
                "five_floor_sales_count": "5층 판매량",
                "eleven_floor_sales_count": "11층 판매량",
                "main_category": "대분류(카테고리)",
                "middle_category": "중분류(카테고리)",
                "sub_category": "소분류(카테고리)",
            }
        }

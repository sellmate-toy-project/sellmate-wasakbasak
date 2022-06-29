from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from . import deps
import crud
import requests
from bs4 import BeautifulSoup

router = APIRouter()


@router.get("/products", response_model=None)
def read_user_by_id(
    db: Session = Depends(deps.get_db),
) -> Any:
    base_uri = "https://emart.ssg.com/category/main.ssg?dispCtgId="
    collect_main_categories = [
        "6000095859",  # 과자/쿠키/파이
        "6000095865",  # 초콜릿/초코바
    ]

    for main_category in collect_main_categories:
        print(base_uri + main_category)
        res = requests.get(base_uri + main_category)

        if res.status_code == 200:
            soup = BeautifulSoup(res.text, 'html.parser')
            product_categories = soup.select('.none_child a')

            for category in product_categories:
                print(category.text)
        else:
            raise Exception("Server Error")

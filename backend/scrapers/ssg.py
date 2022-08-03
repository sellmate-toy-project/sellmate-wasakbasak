import requests
import crud
from bs4 import BeautifulSoup


class Ssg:
    def __init__(self, db):
        self.db = db
        self.base_uri = "https://emart.ssg.com/category/main.ssg?dispCtgId="
        self.collect_main_categories = [
            "6000095505",  # 과자/시리얼/빙과/떡
        ]
        self.sub_product_categories = []

    def collect_category(self):
        # 최상위 카테고리 정보 조회
        base_category = crud.product_category.get_by_name(
            db=self.db,
            name="과자",
        )

        # 대분류
        for main_category in self.collect_main_categories:
            try:
                res = requests.get(self.base_uri + main_category)
                if res.status_code == 200:
                    # 카테고리 파싱
                    soup = BeautifulSoup(res.text, "html.parser")
                    middle_categories = soup.select("#category_filter .clickable")

                    # 중분류 수집
                    for middle_category in middle_categories:
                        product_category = self.insert_category(base_category, middle_category)

                        sub_res = requests.get(self.base_uri + product_category.code)
                        if sub_res.status_code == 200:
                            # 카테고리 파싱
                            sub_soup = BeautifulSoup(sub_res.text, "html.parser")
                            sub_categories = sub_soup.select("#category_filter .clickable")

                            # 소분류 수집
                            for sub_category in sub_categories:
                                product_category = self.insert_category(product_category, sub_category)
                                self.sub_product_categories.append(product_category)
            except Exception as e:
                print(f'Server Error: {e}')

    def insert_category(self, owner_category, category):
        product_category = crud.product_category.get_by_name(
            self.db,
            name=category.text
        )

        if not product_category:
            product_category = crud.product_category.create_with_owner(
                db=self.db,
                obj_in={
                    "name": category.text,
                    "code": category["data-ilparam-value"],
                },
                owner_id=owner_category.id
            )

        return product_category

    def collect_product(self):
        sub_product_category = {
            'id': 193,
            'name': '과자/쿠키/파이',
            'owner_id': 3,
            'code': '6000095859',
        }
        try:
            res = requests.get(self.base_uri + sub_product_category.get('code') + "&sort=regdt&pageSize=100")
            if res.status_code == 200:
                # 상품 리스트 파싱
                soup = BeautifulSoup(res.text, "html.parser")
                products = soup.select(".cunit_thmb_lst li")

                for product in products:
                    crud.product.create(
                        db=self.db,
                        obj_in={
                            "name": product.select(".cunit_info .tx_ko")[0].text,
                            "desc": product.select(".thmb img")[0]['src'],
                            "price": product.select(".cunit_info .ssg_price")[0].text.replace(",", "")
                        },
                        product_category_id=sub_product_category.get('id')
                    )
                    raise
        except Exception as e:
            print(f'Server Error: {e}')

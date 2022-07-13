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

    def collect_category(self):
        base_category = crud.product_category.get_by_name(
            db=self.db,
            name="과자",
        )

        for main_category in self.collect_main_categories:
            try:
                res = requests.get(self.base_uri + main_category)

                if res.status_code == 200:
                    soup = BeautifulSoup(res.text, "html.parser")
                    product_categories = soup.select("#category_filter .clickable")

                    for category in product_categories:
                        product_category = crud.product_category.create_with_owner(
                            db=self.db,
                            obj_in={
                                "name": category.text,
                                "code": category["data-ilparam-value"],
                            },
                            owner_id=base_category.id
                        )
                        print(product_category)
                        # sub_res = requests.get(self.base_uri + main_category)
                        #
                        # if res.status_code == 200:
                        #     print('test')
            except Exception as e:
                print(f'Server Error: {e}')

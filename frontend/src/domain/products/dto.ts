export interface ProductsRequest {

}

export interface ProductsResponse {
  "body": [
    {
      "id": "상품 일련번호",
      "name": "상품명",
      "code": "판매처 상품코드",
      "desc": "상품 이미지",
      "price": "상품 금액",
      "status": "상품 상태",
      "product_category_id": "상품 카테고리 일련번호",
      "product_likes": {
        "user_id": "사용자 일련번호",
        "product_id": "상품 일련번호"
      }
    }
  ],
  "httpStatus": 200,
  "httpMethod": "string",
  "message": "",
  "path": "string",
  "timestamp": "2022-10-26 00:5622",
  "paging_meta": {
    "total_count": 0,
    "total_page": 0,
    "current_page": 0,
    "size": 0
  }
}

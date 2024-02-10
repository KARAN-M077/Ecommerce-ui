import p1_img from "./product_12.png";
import p2_img from "./product_35.png";
import p3_img from "./product_14.png";
import p4_img from "./product_8.png";
import p5_img from "./product_15.png";
import p6_img from "./product_2.png";
import p7_img from "./product_17.png";
import p8_img from "./product_28.png";

let new_collections = [
  {
    "id": 39,
    "name": "Jordan Little Kids' T-Shirt and Shorts Set",
    "category": "Kids",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a9d7f4bc-ba6e-43ca-8ab8-c64fa6b3038e/jordan-little-kids-t-shirt-and-shorts-set-gnW4JV.png",
    "new_price": 34.97,
    "old_price": 40.0
  },
  {
    "id": 40,
    "name": "Nike Air Max 90 SE Men's Shoes",
    "category": "Men",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/04c60ba8-a8d6-4457-95f9-19bc0549de6c/dri-fit-athletic-arch-jersey-pittsburgh-steelers-mens-pullover-hoodie-LKxlFb.png",
    "new_price": 119.97,
    "old_price": 135.0
  },
  {
    "id": 41,
    "name": "Nike Dri-FIT Athletic Arch Jersey (NFL Pittsburgh Steelers) Men's Pullover Hoodie",
    "category": "Men",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/04c60ba8-a8d6-4457-95f9-19bc0549de6c/dri-fit-athletic-arch-jersey-pittsburgh-steelers-mens-pullover-hoodie-LKxlFb.png",
    "new_price": 100.0,
    "old_price": 115.0
  },
  {
    "id": 42,
    "name": "Sylvia Fowles Lynx Explorer Edition Nike Dri-FIT WNBA Victory Jersey",
    "category": "Women",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bb9ced95-9d57-41f8-b81f-4750760eed4c/sylvia-fowles-lynx-explorer-edition-dri-fit-wnba-victory-jersey-M9HZFt.png",
    "new_price": 100.0,
    "old_price": 110.0
  },
  {
    "id": 43,
    "name": "Nike Air Big Kids' (Boys') Pullover Hoodie",
    "category": "Kids",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c45813e4-c2dc-40d4-809e-68a294ff98b2/air-big-kids-boys-pullover-hoodie-TV2v6D.png",
    "new_price": 34.97,
    "old_price": 40.0
  },
  {
    "id": 44,
    "name": "Paris-Saint Germain 2021/22 Stadium Third Big Kids' Nike Dri-FIT Soccer Jersey",
    "category": "Kids",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bb9ced95-9d57-41f8-b81f-4750760eed4c/sylvia-fowles-lynx-explorer-edition-dri-fit-wnba-victory-jersey-M9HZFt.png",
    "new_price": 75.0,
    "old_price": 80.0
  },
  {
    "id": 45,
    "name": "Nike Dri-FIT City Connect Striped (MLB San Francisco Giants) Men's Polo",
    "category": "Men",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d9a4ad60-5f25-4593-a515-82960b203e34/dri-fit-city-connect-striped-san-francisco-giants-mens-polo-LcD3Mg.png",
    "new_price": 65.0,
    "old_price": 75.0
  },
  {
    "id": 46,
    "name": "Nike Team (NFL Pittsburgh Steelers) Men's Polo",
    "category": "Men",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cf7c7d1c-e10a-4b98-9a1b-93fc68f717df/team-nfl-pittsburgh-steelers-mens-polo-mBqqqt.png",
    "new_price": 60.0,
    "old_price": 70.0
  },
  {
    "id": 47,
    "name": "Nike Sportswear Tech Fleece Windrunner",
    "category": "Men",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/04c60ba8-a8d6-4457-95f9-19bc0549de6c/dri-fit-athletic-arch-jersey-pittsburgh-steelers-mens-pullover-hoodie-LKxlFb.png",
    "new_price": 120.0,
    "old_price": 150.0
  },
  {
    "id": 48,
    "name": "Nike Air Max 90 Premium Men's Shoes",
    "category": "Men",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/07f00243-9e63-4ae0-bef6-05737a6b99b6/air-max-90-premium-mens-shoes-5hK3wF.png",
    "new_price": 140.0,
    "old_price": 160.0
  },
  {
    "id": 49,
    "name": "Nike Dri-FIT Strike",
    "category": "Men",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c9ab2191-8908-484b-bd8d-1a4a429cf8da/dri-fit-strike-Fvb3wT.png",
    "new_price": 55.0,
    "old_price": 65.0
  },
  {
    "id": 50,
    "name": "Paris-Saint Germain 2021/22 Stadium Home",
    "category": "Men",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7de4b169-f63b-4b61-b01a-3608a5b7bdc0/paris-saint-germain-2021-22-stadium-home-FgD6Sq.png",
    "new_price": 90.0,
    "old_price": 100.0
  }

];

export default new_collections;

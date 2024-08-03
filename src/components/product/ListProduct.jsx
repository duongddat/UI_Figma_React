import classNames from "classnames/bind";
import styles from "./Product.module.css";

import Image1 from "../../assets/img/Rectangle 3.png";
import Image2 from "../../assets/img/Rectangle 3-1.png";
import Image3 from "../../assets/img/Rectangle 3-2.png";
import Image4 from "../../assets/img/Rectangle 3-3.png";
import ItemProduct from "./ItemProduct";

const cx = classNames.bind(styles);
const DUMMY_PRODUCT = [
  {
    image: Image4,
    name: "Tshirt Levis",
    price: "49,99",
  },
  {
    image: Image3,
    name: "Long jeans jacket",
    price: "129,99",
  },
  {
    image: Image2,
    name: "Fullcap",
    price: "20,99",
  },
  {
    image: Image1,
    name: "Adidas pants",
    price: "89,99",
  },
];

function ListProduct() {
  return (
    <div className={cx("product-list")}>
      {DUMMY_PRODUCT.map((product, index) => (
        <ItemProduct key={index} product={product} index={index + 1} />
      ))}
    </div>
  );
}

export default ListProduct;

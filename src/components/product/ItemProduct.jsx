import classNames from "classnames/bind";
import styles from "./Product.module.css";

const cx = classNames.bind(styles);

function ItemProduct({ product, index }) {
  return (
    <div className={cx("product-item")}>
      <div className={cx("product-item__index")}>{index}</div>
      <div className={cx("product-item__detail")}>
        <img
          src={product.image}
          alt={product.name}
          className={cx("product-item__img")}
        />
        <div className={cx("product-item", "product-item__group")}>
          <h5 className={cx("product-item__name")}>{product.name}</h5>
          <span className={cx("product-item__price")}>$ {product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;

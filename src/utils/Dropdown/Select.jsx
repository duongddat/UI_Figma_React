import classNames from "classnames/bind";
import styles from "./Dropdown.module.css";
import { ReactComponent as DropdownIcon } from "../../assets/img/icon/dropdown.svg";

const cx = classNames.bind(styles);

function Select({ menuShow, setMenuShow, selected }) {
  return (
    <div
      className={cx("select", menuShow && "select-clicked")}
      onClick={() => setMenuShow((preShow) => !preShow)}
    >
      <span className={cx("selected")}>{selected}</span>
      <div className={cx("caret", menuShow && "caret-rotate")}>
        <DropdownIcon />
      </div>
    </div>
  );
}

export default Select;

import classNames from "classnames/bind";

import styles from "./Dropdown.module.css";
import { useState } from "react";
import Select from "./Select";

const cx = classNames.bind(styles);

function Dropdown({ options }) {
  const [menuShow, setMenuShow] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const selectOption = (e) => {
    setSelected(e.target.innerText);
    setMenuShow((prevShow) => !prevShow);
  };

  const dropdownList = options.map((option) => (
    <li key={option} onClick={selectOption}>
      {option}
    </li>
  ));

  return (
    <div className={cx("dropdown")}>
      <Select
        menuShow={menuShow}
        setMenuShow={setMenuShow}
        selected={selected}
      />
      <ul className={cx("menu", menuShow && "menu-open")}>{dropdownList}</ul>
    </div>
  );
}

export default Dropdown;

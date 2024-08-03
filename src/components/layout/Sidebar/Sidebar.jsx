import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import { ReactComponent as LogoImage } from "../../../assets/img/logo.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/img/icon/navigation/dashboard.svg";
import { ReactComponent as OrderIcon } from "../../../assets/img/icon/navigation/orders.svg";
import { ReactComponent as ProductIcon } from "../../../assets/img/icon/navigation/products.svg";
import { ReactComponent as MarketIcon } from "../../../assets/img/icon/navigation/marketing.svg";
import { ReactComponent as RateIcon } from "../../../assets/img/icon/navigation/rates.svg";
import { ReactComponent as ReportIcon } from "../../../assets/img/icon/navigation/reports.svg";
import styles from "./Sidebar.model.css";

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    name: "Dashboard",
    to: "/",
    Icon: DashboardIcon,
  },
  {
    name: "Orders",
    to: "/order",
    Icon: OrderIcon,
  },
  {
    name: "Products",
    to: "/product",
    Icon: ProductIcon,
  },
  {
    name: "Marketing",
    to: "/market",
    Icon: MarketIcon,
  },
  {
    name: "Rates",
    to: "/rate",
    Icon: RateIcon,
  },
  {
    name: "Reports",
    to: "/report",
    Icon: ReportIcon,
  },
];

function Sidebar() {
  return (
    <div className={cx("menu")}>
      <div className={cx("logo")}>
        <LogoImage className={cx("logo-img")} />
        <h2>ForShop</h2>
      </div>
      <div className={cx("menu-list")}>
        {MENU_ITEM.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) => cx("item", { active: isActive })}
          >
            <item.Icon className={cx("icon")} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

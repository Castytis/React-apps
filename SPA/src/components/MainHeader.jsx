import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <nav className={classes.header}>
      <ul>
        <li>
        <NavLink
              to="/welcome"
              className={(isActive) =>
                !isActive.isActive ? "" : classes.active
              }>
              Welcome
            </NavLink>
        </li>
        <li>
          <NavLink to="/products" 
          className={(isActive) => !isActive.isActive ? "" : classes.active}>
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainHeader;

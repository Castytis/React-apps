import React from "react";
import mealsImage from "../../assets/food.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Le Restaurante</h1>
        <HeaderCartButton onAdd={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;

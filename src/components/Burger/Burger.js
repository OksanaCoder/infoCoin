import React from 'react';
import './Burger.css';

const Burger = ({ isOpenMenu, handleToggleMenu }) => {
  return (
    <div onClick={handleToggleMenu} className="navBurger">
      <button
        className={`${isOpenMenu ? 'burgerButton_open' : 'burgerButton'}`}
      ></button>
      <span
        className={isOpenMenu ? 'navBurgerBarClose' : 'navBurgerBar'}
      ></span>
    </div>
  );
};

export default Burger;

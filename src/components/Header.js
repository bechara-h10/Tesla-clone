import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import Hamburger from "hamburger-react";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="./images/logo.svg" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a href="#" key={index}>
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <HamburgerWrapper>
          <CustomMenu
            size={20}
            toggled={burgerStatus}
            toggle={setBurgerStatus}
          />
        </HamburgerWrapper>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        {cars &&
          cars.map((car, index) => {
            return (
              <li key={index}>
                <a href="#">{car}</a>
              </li>
            );
          })}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Use Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (width <=768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(Hamburger)`
  position: absolute;
  cursor: pointer;
  z-index: 100;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform ease-in-out 300ms;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const HamburgerWrapper = styled.div`
  z-index: 100;
`;

export default Header;

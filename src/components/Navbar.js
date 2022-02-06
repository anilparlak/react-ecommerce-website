import React from "react";
import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 70px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  ${mobile({ padding: "10px 20px" })}
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${mobile({ display: "none" })}
`;
const NavMenu = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const NavMenuList = styled.li`
  color: #000;
  cursor: pointer;
  list-style: none;
  font-weight: 600;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -5px;
    background: #e53637;
    left: 0;
    transition: 0.5s;
  }

  :after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -3px;
    background: #e53637;
    right: 0;
  }

  :hover {
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    ::before {
      background: #e53637;
      width: 100%;
      height: 3px;
      transition: width 0.5s cubic-bezier((0.22, 0.61, 0.36, 1));
    }
    ::after {
      background: transparent;
      width: 100%;
    }
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "1", justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  align-items: center;
`;
const Logo = styled.h2`
  font-weight: 700;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/">
            <Logo>Logo</Logo>
          </Link>
        </Left>
        <Center>
          <NavMenu>
            <Link style={{ textDecoration: "none", color: "#000" }} to="/">
              <NavMenuList>Home</NavMenuList>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/products/woman"
            >
              <NavMenuList>Shop</NavMenuList>
            </Link>
            <Link style={{ textDecoration: "none", color: "#000" }} to="/cart">
              <NavMenuList>Pages</NavMenuList>
            </Link>
            <NavMenuList>Contacts</NavMenuList>
          </NavMenu>
        </Center>
        <Right>
          <MenuItem>
            <FavoriteBorderOutlined />
          </MenuItem>
          <MenuItem>
            <Search style={{ cursor: "pointer" }} />
          </MenuItem>
          <Link to="/cart" style={{ textDecoration: "none", color: "#000" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

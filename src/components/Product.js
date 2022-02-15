import React, { useState } from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoriteRedux";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f2ee;
  border-radius: 15px;

  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 225px;
  height: 225px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;

const Image = styled.img`
  height: 60%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const TitleContainer = styled.div`
  height: 15%;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  align-items: center;

  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;
const Name = styled.div`
  color: #000;
  font-weight: 700;
`;
const Price = styled.div`
  color: #000;
  font-weight: 700;
`;

const Error = styled.span`
  color: #e53637;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  bottom: 25%;
`;

const Product = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [error, setError] = useState(false);
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();

  const isUser = user ? true : false;

  const handleFavorite = (event) => {
    if (isUser) {
      dispatch(addFavorite(item));
      setError(false);
      setChange(true);
      
    }else{
      setError(true);
      setChange(!change);
      const interval = setInterval(() => {
        setError(false);
        clearInterval(interval);
      }, 1000);
    }

    
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />

      <Info>
        {/* <Icon>
          <ShoppingCartOutlined />
        </Icon> */}
        <Icon>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={`/product/${item._id}`}
          >
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined onClick={handleFavorite} style={(user && change)? {color:"red"} : {}} />
        </Icon>
        {error && <Error>Please sign in for favorite</Error>}
      </Info>
      <TitleContainer>
        <Name>{item.title}</Name>
        <Price>${item.price}</Price>
      </TitleContainer>
    </Container>
  );
};

export default Product;

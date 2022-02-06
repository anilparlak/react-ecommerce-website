import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeProducts } from "../redux/cartRedux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  //background: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`;
const Text = styled.span`
  color: #000;
  font-weight: 400;
  line-height: 40px;
  font-style: 24px;
  display: flex;
`;
const Count = styled.strong`
  color: #e53637;
  margin: 0 5px;
`;
const Success = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  const handleCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      clearInterval(interval);

      navigate("/");
    }
  };
  dispatch(removeProducts()); // clear all order products
  var interval = setInterval(handleCount, 1000);

  return (
    <Container>
      <Text>Your payment is successful.</Text>
      <Text>
        After <Count>{count}</Count> seconds you will be redirected to the
        Homepage
      </Text>
    </Container>
  );
};

export default Success;

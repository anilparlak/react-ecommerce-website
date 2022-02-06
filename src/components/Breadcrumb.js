import { ChevronRightOutlined } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  padding: 20px 50px;
  background: #f3f2ee;

  ${mobile({ display: "none" })}
`;

const Title = styled.h4`
  color: #111111;
  font-weight: 700;
  margin-bottom: 8px;
  font-size: 20px;
`;

const MenuLists = styled.ul`
  display: flex;
`;

const List = styled.div`
  margin-right: 15px;

  &:last-child {
    margin-left: 15px;
  }
`;

const Breadcrumb = ({ title, prevLink, link }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>{title}</Title>
      <MenuLists>
        <List style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          {prevLink}
        </List>
        <ChevronRightOutlined />
        <List>{link}</List>
      </MenuLists>
    </Container>
  );
};

export default Breadcrumb;

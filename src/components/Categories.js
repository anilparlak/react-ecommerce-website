import React from "react";
import styled from "styled-components";
import Category from "./Category";
import { categories } from "../data";
import {iPad, mobile} from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection:"column" , padding:"0"})}
  ${iPad({ flexDirection:"column" , padding:"0"})}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Category item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { iPad, mobile, mobileSm } from "../responsive";
import {useLocation} from 'react-router-dom'

const Container = styled.div`
  overflow: hidden;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobileSm({flexDirection:"column"})}
`;

const Filter = styled.div`
  margin: 40px 20px 0 50px;
  ${mobile({ margin: "25px 20px", display: "flex", flexDirection: "column" })}
  ${iPad({ margin: "25px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
  ${iPad({ marginRight: "0px" })}
  
`;

const Select = styled.select`
  padding: 10px 25px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
  ${iPad({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductLists = () => {
  const location = useLocation();
  const cat = (location.pathname.split("/")[2])
  const [filters,setFilters] = useState({});

  const [sort,setSort] = useState("Newest");

  const handleFilters = (event) =>{
    
    setFilters({...filters,[event.target.name]:event.target.value.toLowerCase()})
  }


  return (
    <Container>
      <Announcement />
      <Navbar />
      <Breadcrumb title={cat.toUpperCase()} prevLink={"Home"} link={cat.toUpperCase()} />
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(event)=>setSort(event.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductLists;

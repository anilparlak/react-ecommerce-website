import React from 'react';
import styled from 'styled-components';
import {iPad, mobile, mobileSm} from '../responsive';
import {Link} from 'react-router-dom'
const Container = styled.div`
    flex: 1;
    height: 70vh;
    position: relative;
    ${mobile({ width:"80vw", margin:"0 auto" })}
    ${mobileSm({width:"100%"})}
`
const CategoryContent = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    position: relative;
    padding:20px;

    ${mobile({ padding:"10px 0" })}
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;

    ${mobile({ height: "20vh" })}
    ${iPad({ height: "300px" })}
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background: #fff;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 15px;
  
    transition: all .4s ease;

    
    :hover{
        background: #e53637;
        color: #fff;
    
        
    }
`;
const Category = ({item}) => {
  return (
      <Container>
          <Link to={`/products/${item.cat}`}>
            <CategoryContent>
                <Image src={item.img}/>
                <Info>
                    <Title> {item.title} </Title>
                    <Button>Show Now</Button>
                </Info>
            </CategoryContent>
          </Link>
      </Container>
  );
};

export default Category;

import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile, iPad, mobileSm} from '../responsive'

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #000;
  padding: 40px 40px 0 40px;
  display: flex;
  flex-direction: column;

  ${mobile({ padding:"20px 20px 0 20px",height:"70vh" })}
  ${mobileSm({height:"auto"})}
`;
const Top = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 45px;

  ${mobile({ flexDirection:"column",alignItems:"center",marginBottom:"20px" })}
  ${iPad({ flexDirection:"column"})}
`;
const TopLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 25%;

  ${mobile({ maxWidth:"80%"})}
  ${iPad({ maxWidth:"100%", textAlign:"center"})}
`;
const Logo = styled.div`
  cursor: pointer;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;

  ${mobile({ marginBottom:"15px"})}
  ${iPad({ marginBottom:"15px"})}
`;
const Description = styled.p`
  color: #b7b7b7;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 30px;
  ${mobile({ marginBottom:"15px"})}
  ${iPad({ marginBottom:"15px"})}
`;
const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px 0 0;
  ${mobile({ padding:"0 0 15px 0"})}
  ${iPad({ padding:"0 0 15px 0"})}
`;
const TopCenter = styled.div`
  flex: 1;
  ${mobile({ display:"none"})}
  ${iPad({ display:"none"})}
`;
const TopCenterTitle = styled.h4`
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;

  ${mobile({marginBottom:"15px"})}
  ${iPad({marginBottom:"15px"})}
 
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-align: center;
  //cursor: pointer;
  color: #b7b7b7;
`;

const TopRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #b7b7b7;
  ${mobile({marginBottom:"10px"})}
  ${iPad({marginBottom:"10px"})}
`;

const Payment = styled.img`
  width: 50%;
`;
const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 40px;
  display: flex;
  justify-content: center;
`;
const BottomText = styled.span`
  text-align: center;
  color: #b7b7b7;
`;

const Footer = () => {
  return (
    <Container>
      <Top>
        <TopLeft>
          <Logo>Logo</Logo>
          <Description>
            The customer is at the heart of our unique business model, which
            includes design.
          </Description>
          <Socials>
            <Twitter />
            <Instagram />
            <Facebook />
            <LinkedIn />
            <Pinterest />
          </Socials>
        </TopLeft>
        <TopCenter>
          <TopCenterTitle>Shopping</TopCenterTitle>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </TopCenter>
        <TopRight>
          <TopCenterTitle>Contact</TopCenterTitle>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> Istabul / Turkey
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +90 05xx xxx xx xx
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} /> 
            <a style={{color: "#b7b7b7" , textDecoration:"none"}} href="http://anilparlak.com/" rel="noreferrer" target="_blank">anilparlak.com</a>
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </TopRight>
      </Top>
      <Bottom>
        <BottomText>Copyright © 2021 All rights reserved</BottomText>
      </Bottom>
    </Container>
  );
};

export default Footer;

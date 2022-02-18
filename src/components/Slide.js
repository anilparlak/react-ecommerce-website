import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { mobile, tablet, iPad } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 120px);
  width: 100%;
  position: relative;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slider = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${iPad({flexDirection:"column"})}
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${iPad({height:"60%"})}
`;
const Image = styled.img`
  height: 80%;
  ${tablet({ height: "60%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${iPad({textAlign:"center", padding:"0"})}
`;
const Title = styled.h1`
  font-size: 70px;
  ${tablet({ fontSize: "50px" })}
  ${iPad({ fontSize: "30px" })}
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${iPad({ fontSize: "15px" , padding:"0 30px", margin:"15px 0"})}
`;

const Button = styled.button`
  padding: 10px 40px;
  font-size: 20px;
  background-color: #000;
  cursor: pointer;
  color: #fff;
  border: none;
  transition: all 0.4s ease;
  ${iPad({ fontSize: "14px" })}
  :hover {
    opacity: 0.8;
  }
`;
const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slider bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={() => navigate("/products/kids")}>SHOP NOW</Button>
            </InfoContainer>
          </Slider>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slide;

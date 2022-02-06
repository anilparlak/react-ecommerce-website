import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile, iPad } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height:"40vh" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-weight: 600;
  ${mobile({ fontSize:"32px", textAlign:"center" })}
  ${iPad({ fontSize:"35px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #e53637;
  color: #fff;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Subscribe To Our Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="E-mail" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

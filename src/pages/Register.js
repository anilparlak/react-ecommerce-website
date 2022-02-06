import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../api";
import {mobile} from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  ${mobile({ width: "75%" })}
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #000;
  color: white;
  cursor: pointer;
  transition: all .4s ease;

  &:hover{
      background-color: #e53637;
  }
`;

const Register = () => {

  const [input, setInput] = useState({});
  const navigate = useNavigate()

  const handleInput = (event) => {
    setInput({...input, [event.target.name]:event.target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const {username,password,email} = input;

    const saveInput = async () => {
      try{
        const response = await api().post("/auth/register",{
          username:username,
          email:email,
          password:password
        })
        console.log(response)
      }catch(err){
        console.log(err)
      }
    }
    saveInput()
    navigate("/login")
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" name="name" onChange={handleInput}/>
          <Input placeholder="Last Name" name="lastname" onChange={handleInput} />
          <Input placeholder="Username" name="username" onChange={handleInput} />
          <Input placeholder="E-Mail" name="email" onChange={handleInput}/>
          <Input placeholder="Password" type="password" name="password" onChange={handleInput}/>
          <Input placeholder="Confirm Password" type="password" name="confirmpassword" onChange={handleInput}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b style={{color:"#e53637"}}>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
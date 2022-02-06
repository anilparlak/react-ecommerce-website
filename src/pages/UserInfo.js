import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import { logoutSuccess } from "../redux/userRedux";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5, 1),
      width: "25ch",
      display: "flex",
    },
  },
}));

const Container = styled.div`
  width: 50%;
  height: calc(100vh - 120px);
  margin: 0 auto;
  border-radius: 6px;
  border: solid 1px #e2e2e2;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 5%);
  display: flex;
  padding: 50px;
  justify-content: center;
`;

const UserInfo = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const { username, email, accessToken, _id } = user;
  const [info, setInfo] = useState({
    username: `${user.username}`,
    email: `${user.email}`,
  });
  const navigate = useNavigate();

  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      token: `Bearer ${accessToken}`,
    },
  };

  const handleChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (info) {
      const putUser = async () => {
          try{
              const response = await api().put(`/users/${_id}`,{
                  username:info.username,
                  email:info.email
              },options)
              console.log(response)
              dispatch(logoutSuccess(""))
              navigate("/login")
              
          }catch(err){
              console.log(err)
          }
      };
      putUser();
    }
    
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-required"
            label="User Name"
            defaultValue={username}
            name="username"
            value={info.username}
            onChange={handleChange}
          />

          <TextField
            id="standard-required"
            label="E-mail"
            defaultValue={email}
            name="email"
            value={info.email}
            onChange={handleChange}
          />

          <TextField
            id="standard-required"
            label="Password"
          />
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            style={{ display: "flex" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </Container>
      <Footer/>
    </>
  );
};

export default UserInfo;

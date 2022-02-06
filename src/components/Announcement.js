import React, { useState } from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../redux/userRedux';

const Container = styled.div`
    height: auto;
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    ${mobile({ height:"30px", padding:"0",justifyContent:"center"})}
`
const AnnounText = styled.span`
    color:#fff;

    ${mobile({ display:"none"})}

`
const AnnounLinks = styled.div`
    color: #fff;
    display: flex;
    ${mobile({ padding: "10px 0px"})}
`


const LoginDropdown = styled.div` 
    width: 120px;
    height: 120px;
    background: #000;
    display: none;
    opacity: 0;
    position: absolute;
    left: calc((100% - 120px) / 2);
    top: 50px;
    z-index: 99;
    justify-content: center;
    -webkit-box-shadow: 2px 5px 13px -4px #000000; 
    box-shadow: 2px 5px 13px -4px #000000;
`
const DropdownMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`
const DropdownList = styled.li`
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    list-style: none;
    transition: color .4s ease-in;

    &:hover{
        color: #e53637;
    }
`
const MenuItem = styled.div`
    margin-left: 20px;
    cursor: pointer;
    position: relative;
    padding: 15px 0;

    &:hover ${LoginDropdown}{
        opacity: 1;
        display: flex;
        
    }

    ${mobile({ marginLeft: " 0px",paddingRight:"15px"})}

`



const Announcement = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch();
    const [logout,setLogout] = useState()
   

 
    const handleOut = (event) => {
       user && setLogout("logout")
        dispatch(logoutSuccess(logout))
        navigate("/")
    }
    

  return (
    <Container>
        <AnnounText>Free shipping, 30-day return or refund guarantee.</AnnounText>
        <AnnounLinks>
            
            <MenuItem onClick={!user? ()=>navigate("/login") : ""}>{`${user ? user.username : `LOGIN`}`} 
            {
                user && 
                        <LoginDropdown>
                        <DropdownMenu>
                            <DropdownList onClick={() => navigate("/update")} >User Info</DropdownList>
                            <DropdownList onClick={() => navigate("/favorite")}>Your Favorite</DropdownList>
                            <DropdownList onClick={handleOut}>Logout</DropdownList>
                        </DropdownMenu>
                    </LoginDropdown>
            }
           
            </MenuItem>
            {/* <MenuItem onClick={()=>navigate("/")}>FAQS</MenuItem> */}
            <MenuItem onClick={()=>navigate("/register")}>{`${user ? "" : `REGISTER`}`}</MenuItem>
        </AnnounLinks>
        
    </Container>
    )
};

export default Announcement;

import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { useDispatch, useSelector } from "react-redux";
import CancelIcon from '@material-ui/icons/Cancel';
import { removeFavorite } from "../redux/favoriteRedux";
import { iPad } from "../responsive";

const Container = styled.div` 
    width: 50%;
    min-height: calc(100vh - 120px);
    margin: 0 auto;
    display: flex;
    padding: 20px;

    flex-direction: column;
`

const Title = styled.h2` 
    font-weight: 700;
    text-align: center;

`
const FavoriteItems = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
    grid-gap: 35px;
    justify-content: space-between;
    padding-top: 30px;

    ${iPad({ gridTemplateColumns:"auto", justifyContent:"center" })}


`
const FavoriteItem = styled.div`
    width: 250px;
    height: auto;
    border-radius: 6px;
    border: solid 1px #e2e2e2;
    background-color: #ffffff;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 5%);
    display: flex;
    align-items: center;
    flex-direction: column;
`
const ImgContainer = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
 object-fit: contain;
`
const Cancel = styled.div` 
    width: 30px;
    height: 30px;
    position: absolute;
    top:10px;
    right: 10px;
`
const Info = styled.div` 
    display: flex;
    flex-direction: column;
`
const ProductName = styled.span`
    margin: 15px 0 ;
`;

const Favorite = () => {
    const favorite = useSelector((state) => state.favorite.favoriteProducts);
    const dispatch = useDispatch();
    
    const handleCancel = (index) =>{
        dispatch(removeFavorite(index))
    }

  return (
      <>
           <Announcement />
           <Navbar />
           <Container>
               <Title>Your Favorite({favorite.length})</Title>
               <FavoriteItems>
               {
                   favorite.map((fav, index) => (
                    <FavoriteItem key={fav._id}>
                        <ImgContainer>
                            <Img src={fav.img} />
                            <Cancel>
                                <CancelIcon onClick={() => handleCancel(index)} style={{width:"100%",height:"100%", cursor:"pointer"}}/>
                            </Cancel>
                            
                        </ImgContainer>
                        <Info>
                            <ProductName> <b>Product: </b> {fav.title} </ProductName> 
                            <ProductName> <b>ID: </b> {fav._id} </ProductName> 
                            <ProductName> <b>Price: </b> ${fav.price} </ProductName> 
                        </Info>
                    </FavoriteItem>
                   ))
               }
               </FavoriteItems>
           </Container>
           <Footer/>
      </>
  );
};

export default Favorite;

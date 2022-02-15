import React,{useEffect,useState} from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Breadcrumb from "../components/Breadcrumb";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile , iPad, mobileSm } from "../responsive";
import {useLocation} from "react-router-dom";
import { api } from "../api";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
const Container = styled.div`
  overflow: hidden;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  ${mobile({ display:"flex",justifyContent:"center"})}

`;

const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  transition: all .6s ease-in;
  
  ${iPad({ height:"auto" })}
  ${mobile({ height: "auto" , width:"200px" })}

  &:hover{
    transform: scale(1.2);
    
      
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
  ${iPad({ padding:"0" })}
`;

const Title = styled.h1`
  font-weight: 600;
  ${mobile({ textAlign:"center" })}
  
`;

const Desc = styled.p`
  padding: 20px 40px 20px 0;
  color: #3d3d3d;
  ${mobile({ textAlign:"center" })}
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ display:"flex", justifyContent:"end"})}
  ${mobileSm({ justifyContent:"center"})}
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
  ${iPad({ width: "100%" })}
  ${mobile({ width: "100%" })}
  ${mobileSm({ flexDirection:"column" , alignItems:"center" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobileSm({marginBottom:"15px"})}
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${iPad({ width: "100%" })}
  ${mobile({ width: "100%" })}
  ${mobileSm({ alignItems:"center" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px 30px;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  transition: all .4s ease;
  ${mobileSm({marginTop:"15px"})}
 &:hover {
    background-color: #e53637;
  } 
`;
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color,setColor] = useState("");
  const [size, setSize] = useState("");
  const disPatch = useDispatch()


  const handleCount = (type) =>{
    if(type === "decrease"){
      quantity > 1 && setQuantity(quantity -1 )
    }else{
      setQuantity(quantity + 1)
    }
  }

  useEffect(() => {
    const getProduct = async () =>{
      try{
        const response = await api().get("/products/find/" + id)
        setProduct(response.data)

      }catch(err){
        console.log(err)
      }
    }
    getProduct();
    
  }, [id]);

  
  const handleClick = () =>{
    disPatch(addProduct({...product, quantity,color,size}) )
  }
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Breadcrumb title={"Product"} prevLink={"Home"} link={"Product"} />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>
              {product.color?.map((item) => (
                <FilterColor color={item} key={item} onClick={() => setColor(item)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s.toUpperCase()} </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{cursor:"pointer"}} onClick={()=>handleCount("decrease")} />
              <Amount>{quantity}</Amount>
              <Add style={{cursor:"pointer"}} onClick={()=>handleCount("increase")}/>
            </AmountContainer>
            <Button onClick={handleClick} >ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default Product;

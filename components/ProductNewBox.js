import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import CartIcon from "./icons/CartIcon";
import Image from "next/image";

const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled( Link )`
  position:relative;
  background-color: #fff;
  padding: 30px 5px 45px 5px ;
  overflow:hidden;
  height: 130px;
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 25px -10px rgb(0 0 0 / 0.40);
  
  img{
    max-width: 100%;
    max-height: 120px;
  };
  margin-bottom:1.rem
`;

const Title = styled.span`
  font-size:.75em;
  color:#555;
  font-weight:600;
  text-decoration:none;
  padding:0 5px;
  position:absolute;
  bottom:10px;
  text-align:center;
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
   background:#d6d6d6;
    padding:0 0  0 7px ;
    border-radius: 10px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:5px;
`;
const New = styled.span`
position:absolute;
top:7px;
left:-19px;
color:white;
background-color:red;
border-radius:.4rem;
padding:2px 20px;
rotate:-45deg;
  box-shadow: -5px 0px 45px -6px rgb(0 0 0 / 0.90);


`

const Price = styled.div`
  font-size: .8rem;
  font-weight:600;
  text-align: center;
  margin-bottom:10px;
  color:#38384a;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
     margin-bottom:0px;

  }
`;

export default function ProductNewBox ( { _id, name, price, images } ) {
   const { addProduct } = useContext( CartContext );
   const url = '/product/' + _id;
   return (
      <ProductWrapper>
         <WhiteBox aria-label="Product" href={ url }>
            <New>New </New>
            <Image loading="lazy" width={ 140 } height={ 120 } style={ { objectFit: "contain" } } quality={ 100 } src={ images?.[ 0 ] } alt="product" />
            <Title>
               { name }
            </Title>
         </WhiteBox>
         <ProductInfoBox>
            <PriceRow>
               <Price>
                  ${ price }
               </Price>
               <Button block onClick={ () => addProduct( _id ) } black >
                  Add to
                  <CartIcon />
               </Button>
            </PriceRow>
         </ProductInfoBox>
      </ProductWrapper>
   );
}
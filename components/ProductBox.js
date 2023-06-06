import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import CartIcon from "./icons/CartIcon";

const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled( Link )`
  position:relative;
  background-color: #fff;
  
  padding:20px 5px 45px  5px;
  height: 130px;
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 50px -10px rgb(0 0 0 / 0.30);
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
  }
  align-items: center;
  justify-content:space-between;
  margin-top:5px;
`;

const Price = styled.div`
  font-size: .8rem;
  font-weight:600;
  text-align: center;
  margin-bottom:5px;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
    font-weight:600;
    text-align: left;
  }
`;

export default function ProductBox ( { _id, name, price, images } ) {
  const { addProduct } = useContext( CartContext );
  const url = '/product/' + _id;
  return (
    <ProductWrapper>
      <WhiteBox aria-label="Product" href={ url }>
          <img src={ images?.[ 0 ] } alt="product" />
          <Title>{ name }</Title>
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





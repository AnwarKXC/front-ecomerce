import styled from "styled-components";
import Link from "next/link";

const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled( Link )`
  position:relative;
  background-color: #fff;
  padding: 5px ;
  
  padding-bottom:45px;
  height: 130px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 120px;
  };
  margin:2rem 0 1rem ;
`;

const Title = styled( Link )`
  font-weight: normal;
  font-size:.75em;
  color:#555;
  text-decoration:none;
  margin-top:-35px;
  text-align: center;
  font-weight:600;
  padding:0 auto ;
  position:absolute;
  display: flex;
  align-items: center;
  justify-content: center;

`;




export default function ProductCatBox ( { _id, name, images } ) {
  const url = '/product/' + _id;
  return (
    <ProductWrapper>
      <WhiteBox aria-label="Product" href={ url }>
        <img src={ images?.[ 0 ] } alt="product" />
      </WhiteBox>
      <Title aria-label="Product" href={ url }>{ name }</Title>
    </ProductWrapper>
  );
}





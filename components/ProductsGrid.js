import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: 50px 17px;
  padding:20px;
overflow:hidden;
  @media screen and (min-width: 550px) {
    grid-template-columns: 1fr 1fr 1fr  ;
  };
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr ;
  };
  @media screen and (min-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid({products}) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 && products.map(product => (
        <ProductBox key={product._id} {...product} />
      ))}
    </StyledProductsGrid>
  );
}
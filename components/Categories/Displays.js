import styled from "styled-components";
import CategoryForm from "../CategoryForm"
import Link from "next/link";
import ProductCatBox from "../ProductCatBox";


const Name = styled.h3`
  font-size: 1em;
  color:#463E4D;
  position:absolute;
  padding: 0 10px;
`;

const SeeMore = styled( Link )`
font-size:.8rem;
color:#31719C;
text-decoration:none;
margin:0 10px;


`

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr  ;
  gap: 2rem;
  padding:10px 0;
  overflow:hidden;
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr  ;
  };
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr  ;
  };
  @media screen and (min-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
  }
`;



export default function DisplaysCategory ( { products } ) {
   return (
      <CategoryForm>
       <Name>Displays<SeeMore aria-label="Product" href= 'Categories/Displays' >see more</SeeMore></Name>
         <StyledProductsGrid >
            { products?.length > 0 && products.map( product => (
               <ProductCatBox key={ product._id } { ...product } />
            ) ) }

         </StyledProductsGrid>


      </CategoryForm>
   )
};


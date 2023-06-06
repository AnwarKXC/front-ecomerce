import styled from "styled-components";
import Center from "@/components/Center";
import ProductsNewGrid from "./ProductNewGrid";
import Link from "next/link";

const Title = styled.span`
  font-size: 2rem;
  margin: 1.5rem 0 ;
  font-weight: 700;
  color:red;
  animation: blinker 1s linear infinite;
@keyframes blinker {
  50% {
    opacity:.50;
    color:#8f1d1d;
}


`;

const SeeMore = styled( Link )`
font-size:.9rem;
color:#31719C;
text-decoration:none;
margin:0 10px;

`

export default function NewProducts ( { products } ) {
  return (
    <Center>
      <h2>
      <Title> New Arrivals</Title><SeeMore aria-label="More Products" href={ '/products' }>see more</SeeMore>
      </h2>
      <ProductsNewGrid products={ products } />
    </Center>
  );
}







import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import NewProducts from "@/components/NewProducts";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "@/components/Footer";
import Head

  from "next/head";
const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage ( { product,newProducts,products } ) {
  const { addProduct } = useContext( CartContext );
  return (
    <>
      <Head>
        <title>{ product.name }</title>
        <meta name="description" content="Created by Anwar kamal" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={ product.images } />
          </WhiteBox>
          <div>
            <Title>{ product.name }</Title>
            <p>{ product.description }</p>
            <PriceRow>
              <div>
                <Price>${ product.price }</Price>
              </div>
              <div>
                <Button primary onClick={ () => addProduct( product._id ) }>
                  <CartIcon />Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
        <NewProducts products={ newProducts } />
        <ProductsGrid products={ products } />
      </Center>
      <Footer/>
    </>
  );
}

export async function getServerSideProps ( context ) {
  await mongooseConnect();
  const { id} = context.query;
  const product = await Product.findById( id );
  const newProducts = await Product.find( { category: product.category }, null, { sort: { '_id': -1 }, limit: 5 } );
  const products = await Product.find( { }, null, { sort: { '_id': -1 }, limit: 5  } );


  return {
    props: {
      product: JSON.parse( JSON.stringify( product ) ),
      newProducts: JSON.parse( JSON.stringify( newProducts ) ),
      products: JSON.parse( JSON.stringify( products ) ),

    }
  }
}




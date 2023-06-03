import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import Footer from "@/components/Footer";
import Link from "next/link";
import Head from "next/head";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import NewProducts from "@/components/NewProducts";
import ProductsGrid from "@/components/ProductsGrid";



const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin: 40px 0 80px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 20px 0;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100px;
    max-height: 100px;
  }
  @media screen and (min-width: 768px) {
    padding: 5px;
    width: 150px;
    height: 150px;
    img{
      max-width: 140px;
      max-height: 140px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 10px 20px;
  display: block;
  font-weight:600;
  color:#3e3e40;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 10px 10px;
  }
`;

const CityHolder = styled.div`
  display:flex;
  gap: 5px;
`;

const SeeMore = styled( Link )`
font-size:.8rem;
color:#31719C;
text-decoration:none;
margin: 10px;
`
const P = styled.p`
font-size:12px;
color:#666;



`

export default function CartPage ( { newProducts , productsss }) {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext( CartContext );
  const [ products, setProducts ] = useState( [] );
  const [ name, setName ] = useState( '' );
  const [ email, setEmail ] = useState( '' );
  const [ city, setCity ] = useState( '' );
  const [ postalCode, setPostalCode ] = useState( '' );
  const [ streetAddress, setStreetAddress ] = useState( '' );
  const [ country, setCountry ] = useState( '' );
  const [ isSuccess, setIsSuccess ] = useState( false );
  useEffect( () => {
    if ( cartProducts.length > 0 ) {
      axios.post( '/api/cart', { ids: cartProducts } )
        .then( response => {
          setProducts( response.data );
        } )
    } else {
      setProducts( [] );
    }
  }, [ cartProducts ] );
  useEffect( () => {
    if ( typeof window === 'undefined' ) {
      return;
    }
    if ( window?.location.href.includes( 'success' ) ) {
      setIsSuccess( true );
      clearCart();
    }
  }, [] );
  function moreOfThisProduct ( id ) {
    addProduct( id );
  }
  function lessOfThisProduct ( id ) {
    removeProduct( id );
  }
  async function goToPayment () {
    const response = await axios.post( './api/checkout', {
      name, email, city, postalCode, streetAddress, country,
      cartProducts,
    } );
    if ( response.data.url ) {
      window.location = response.data.url;
    }
  }
  let total = 0;
  for ( const productId of cartProducts ) {
    const price = products.find( p => p._id === productId )?.price || 0;
    total += price;
  }

  if ( isSuccess ) {
    return (
      <>
        <Head>
          <title>Shipping</title>
          <meta name="description" content="Created by Anwar kamal" />
        </Head>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
          <NewProducts products={ newProducts }/>
        </Center>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Created by Anwar kamal" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            { !cartProducts?.length && (
              <div>Your cart is empty</div>
            ) }
            { products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  { products.map( product => (
                    <tr key={ product._id }>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={ product.images[ 0 ] } alt="" />
                        </ProductImageBox>
                        { product.title }
                      </ProductInfoCell>
                      <td>
                        <Button
                          onClick={ () => lessOfThisProduct( product._id ) }>-</Button>
                        <QuantityLabel>
                          { cartProducts.filter( id => id === product._id ).length }
                        </QuantityLabel>
                        <Button
                          onClick={ () => moreOfThisProduct( product._id ) }>+</Button>
                      </td>
                      <td style={ { "font-weight": "600", "color": "#3e3e40" } }>
                        ${ cartProducts.filter( id => id === product._id ).length * product.price }
                      </td>
                    </tr>
                  ) ) }
                  <tr>
                    <td></td>
                    <td></td>
                    <td style={ { "font-weight": "600", "padding-top": "7px", "color": "#3e3e40" } }>${ total }</td>
                  </tr>
                </tbody>
              </Table>
            ) }
          </Box>
          { !!cartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <Input type="text"
                placeholder="Name"
                value={ name }
                name="name"
                onChange={ ev => setName( ev.target.value ) } />
              <Input type="text"
                placeholder="Email"
                value={ email }
                name="email"
                onChange={ ev => setEmail( ev.target.value ) } />
              <CityHolder>
                <Input type="text"
                  placeholder="City"
                  value={ city }
                  name="city"
                  onChange={ ev => setCity( ev.target.value ) } />
                <Input type="text"
                  placeholder="Postal Code"
                  value={ postalCode }
                  name="postalCode"
                  onChange={ ev => setPostalCode( ev.target.value ) } />
              </CityHolder>
              <Input type="text"
                placeholder="Street Address"
                value={ streetAddress }
                name="streetAddress"
                onChange={ ev => setStreetAddress( ev.target.value ) } />
              <Input type="text"
                placeholder="Country"
                value={ country }
                name="country"
                onChange={ ev => setCountry( ev.target.value ) } />
              <Button primary block
                onClick={ goToPayment }>
                Continue to payment
              </Button>
              <SeeMore href={ '/shipping-info' }> more info about shipping ?</SeeMore>
              <P>use <b> 4242424242424242 </b> for Successful payment .</P>
              <P>use <b> 4000000000009995 </b> for Failed payment .</P>
            </Box>
          ) }
        </ColumnsWrapper>
        <NewProducts products={ newProducts } />

      </Center>
      <Footer />
    </>
  );
}
export async function getServerSideProps () {
  await mongooseConnect();
  const newProducts = await Product.find( { }, null, { sort: { '_id': -1 }, limit: 5 } );

  return {
    props: {
      newProducts: JSON.parse( JSON.stringify( newProducts ) ),

    },
  };
}
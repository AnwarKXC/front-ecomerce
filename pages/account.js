import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSession, signIn, } from "next-auth/react"
import Title from "@/components/Title";
import Button from "@/components/Button";
import styled from "styled-components";
import Center from "@/components/Center";
import { Order } from "@/models/Order";
import { mongooseConnect } from "@/lib/mongoose";
import { primary } from "@/components/colors";
import Head from "next/head";
import Link from "next/link";



const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:500px;

`

const Box = styled.div`
  background-color: #fff;
  padding: 15px 5px;
  color:#1D1D1F;
  border-radius:20px 20px 0 0

`;

const ProductInfoCell = styled.td`
  padding: 1.2rem .4rem ;
  text-align:center;
  font-size:.85rem;
  font-weight:500;
  color:#0a3020;
  border:1px solid;
  

`;

const Span = styled.span`
  display:flex;
  flex-direction:column;
`


const TH = styled.th`
padding: 15px 10px;
color:${primary};


`


const H1 = styled.h1`
font-size:1.2rem;
color:white;
display:flex;
justify-content:center;
background:#38383b;
margin:-35px -5px 0 ;
padding:.6rem;
border-radius:20px 20px 0 0 


`

const Table = styled.table`
tbody tr:nth-child(odd) {
  background-color:#ebfcf5 ;
}

tbody tr:nth-child(even) {
  background-color: #f5feff;
}

`








export default function Account ( { prevOrders } ) {
   const { data: session } = useSession();




   if ( session ) {
      return (
         <>
            <Head>
               <title>{session.user.name}</title>
               <meta name="description" content="Created by Anwar kamal" />
               <meta name="theme-color" content="#317EFB" />
            </Head>
            <Header />
            <Center>
               <Wrapper>
                  <Title>
                     Welcome { session.user.name }</Title>
                  <br />
                  <Box>
                     <H1>last orders</H1>
                     { !prevOrders?.length && (
                        <div style={{"padding":"20px 50px" , "font-size":"20px" ,}}>No Orders yet <Link style={{padding:"10px",textDecoration:"none"}} href="/">order now</Link></div>
                     ) }
                     { prevOrders?.length > 0 && (
                        <Table>
                           <thead>
                              <tr>
                                 
                                 <TH>Product</TH>
                                 <TH>Quantity</TH>
                                 <TH>Price</TH>
                                 <TH>delivered at</TH>
                              </tr>
                           </thead>
                           <tbody>
                              { prevOrders.map( product => (
                                 <tr key={ product._id }>
                                    <ProductInfoCell style={{"textAlign":"start"}} >
                                          { product.line_items.map( ( item ) => ( <Span key={ item }>{item.price_data?.product_data?.name }</Span> ) ) }
                                    </ProductInfoCell>
                                    <ProductInfoCell>{ product.line_items.map( ( item ) => ( <Span key={ item }>{ item.quantity }</Span> ) ) }</ProductInfoCell>
                                    <ProductInfoCell>{ product.line_items.map( ( item ) => ( <Span key={ item }>{ item.price_data.unit_amount / 100 } $</Span> ) ) }</ProductInfoCell>
                                    <ProductInfoCell>{ ( new Date( product.createdAt ) ).toLocaleString() }</ProductInfoCell>
                                    <br></br>
                                 </tr>
                              ) ) }
                              <tr>
                                 <td></td>
                                 <td></td>
                              </tr>
                           </tbody>
                        </Table>
                     ) }
                  </Box>
               </Wrapper>
            </Center>
            <Footer />
         </>
      )
   }
   return (
      <>
         <Head>
            <title>Account</title>
            <meta name="description" content="Created by Anwar kamal" />
         </Head>
         <Header />
         <Center>
            <Wrapper>
               <Title>
                  Not signed in</Title>
               <br />
               <Button black onClick={ () => signIn() }>Sign in <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
               </svg>
               </Button>
            </Wrapper>
         </Center>
         <Footer />

      </>
   )
}




async function getServerSideProps () {

   await mongooseConnect();
   const prevOrders = await Order.find( {}, null, { sort: { '_id': -1 } } );
   return {
      props: {
         prevOrders: JSON.parse( JSON.stringify( prevOrders ) ),
      }
   };
}


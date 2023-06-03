import Center from "@/components/Center"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Title from "@/components/Title"
import Image from "next/image"
import styled from "styled-components"
import Head from "next/head"

const P = styled.p`
font-size:13px;
max-width:600px;
line-height:1.5;
color:#444
`
const H5 = styled.h4`
color:#444


`

export default function Shippinginfo () {
   return ( <main>
      <Head>
         <title>Shipping</title>
         <meta name="theme-color" content="#317EFB" />
         <meta name="description" content="Created by Anwar kamal" />
      </Head>
      <Header />
      <Center>
         <Title>How are Shipping and Delivery Dates Calculated?</Title>
         <H5 >We calculate delivery estimates by adding the transit time to the estimated shipping date.</H5>
         <div><Image src={ '/GUID-DAFF793D-112F-4B1A-8C77-471364D9D741=1=en-US=Normal.png' } alt="shipping" width={ 600 } height={ 115 } /></div>
         <P>Transit time is based on your chosen shipping speed. We calculate transit time using business days. Saturday and Sunday don&#39;t usually count toward the transit time. An exception to this is when a weekend delivery option is available during checkout. We also take holidays into account when calculating the transit time.
            For some delivery dates, we may provide an &quot; order within &quot; countdown timer. This shows the window of time in which you must place the order to receive your delivery by the date shown. The date is subject to change before you place your order. Your order confirmation email will include your confirmed delivery date.
            After an order ships, you can track it in Your Orders
         </P>
         <H5>FREE Shipping</H5>
         <P>Your order will arrive within five to eight days. We process and ship your order in the most cost-efficient way possible so we can offer free shipping. If you notice that your items haven&#39;t shipped yet, don&#39;t worry. We may take a little longer than you expect to ship out your order, but we&#39;ll ship in time for the expected delivery date</P>
         <H5>International Shipments</H5>
         <P>Orders shipped abroad may be delayed due to customs controls.</P>
         <P><b>Note:</b> Unexpected service delays (for example, weather conditions, natural disasters, or unforeseen events) add at least two to three business days to your estimated delivery date. Choosing a higher quantity for an item may make it ineligible for immediate shipping when the item is unavailable locally or at the same location. In this case, the One-Day Delivery option may not appear.</P>
      </Center>
      <Footer />
   </main>

   )
}
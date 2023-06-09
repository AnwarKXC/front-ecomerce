import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";
import Head from "next/head";
import Center from "@/components/Center";
import { Slide } from "@/models/slide";

export default function HomePage ( {  newProducts,featuredProduct } ) {
  return (
    <>
      <Head>
        <title>e-commerce</title>
        <meta name="description" content="Created by Anwar kamal" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Header />
      <Featured product={ featuredProduct } />
      <Center>
        <NewProducts products={ newProducts } />
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps () {
  const featuredProductId = '648dd777ff822d16d857d75a';
  await mongooseConnect();
  const featuredProduct = await Slide.findById( featuredProductId );
  const newProducts = await Product.find( {}, null, { sort: { '_id': -1 }, limit: 10 } );
  return {
    props: {
      featuredProduct: JSON.parse( JSON.stringify( featuredProduct ) ),
      newProducts: JSON.parse( JSON.stringify( newProducts ) ),
    },
  };
}
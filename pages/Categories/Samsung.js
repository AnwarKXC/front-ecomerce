import Header from "@/components/Header";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import Footer from "@/components/Footer";

export default function ProductsPage ( { products } ) {
  return (
    <>
      <Header />
      <Center>
        <Title>Samsung</Title>
        <ProductsGrid products={ products } />
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps () {
  await mongooseConnect();
  const products = await Product.find( { category: '64678b61964e7019057c4ab1' }, null, { sort: { '_id': -1 } } );
  return {
    props: {
      products: JSON.parse( JSON.stringify( products ) ),
    }
  };
}
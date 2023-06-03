import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import PcCategory from "@/components/Categories/Pc";
import SamsungCategory from "@/components/Categories/Samsung";
import EarphonesCategory from "@/components/Categories/Earphones";
import WatchesCategory from "@/components/Categories/Watches";
import IPadCategory from "@/components/Categories/IPad";
import DisplaysCategory from "@/components/Categories/Displays";
import LaptopsCategory from "@/components/Categories/Laptops";
import IPhonesCategory from "@/components/Categories/IPhones";
import Head from "next/head";


export default function Categories ({samsung,pc,laptops, earphones,ipad,iphones ,dispalys,watches}) {
   return (
      <>
         <Head>
            <title>Categories</title>
            <meta name="description" content="Created by Anwar kamal" />
            <meta name="theme-color" content="#317EFB" />
         </Head>
         <Header />
         <Center>
            <Title> Categories</Title>
            <PcCategory products={ pc } />
            <LaptopsCategory products={laptops}/>
            <EarphonesCategory products={ earphones } />
            <DisplaysCategory products={ dispalys } />
            <SamsungCategory products={ samsung } />
            <IPhonesCategory products={ iphones } />
            <WatchesCategory products={ watches } />
            <IPadCategory products={ ipad } />
         </Center>
         <Footer />
      </>
   )
};



export async function getServerSideProps () {
   await mongooseConnect();
   const pc = await Product.find( { category:'64678c0c964e7019057c4ac6'}, null, { sort: { '_id': -1 }, limit: 8 } );
   const laptops = await Product.find( { category:'64678bd2964e7019057c4ac2'}, null, { sort: { '_id': -1 }, limit: 8 } );
   const samsung = await Product.find( { category: '64678b61964e7019057c4ab1'  }, null, { sort: { '_id': -1 }, limit: 8} );
   const iphones = await Product.find( { category: '64678a86964e7019057c4aa1' }, null, { sort: { '_id': -1 }, limit: 8} );
   const displays = await Product.find( { category: '646ecce5e4a471cdb89b7d46' }, null, { sort: { '_id': -1 }, limit: 8 } );
   const earphones = await Product.find( { category: '64678afb964e7019057c4aa5'  }, null, { sort: { '_id': -1 }, limit: 8 } );
   const ipad = await Product.find( { category: '64678cde964e7019057c4ae9' }, null, { sort: { '_id': -1 }, limit: 8} );
   const watches = await Product.find( { category: '64678d71964e7019057c4b08' }, null, { sort: { '_id': -1 }, limit: 8 } );
   return {
      props: {
         pc: JSON.parse( JSON.stringify( pc ) ),
         laptops: JSON.parse( JSON.stringify( laptops ) ),
         samsung: JSON.parse( JSON.stringify( samsung ) ),
         dispalys: JSON.parse( JSON.stringify( displays ) ),
         iphones: JSON.parse( JSON.stringify( iphones ) ),
         earphones: JSON.parse( JSON.stringify( earphones ) ),
         ipad: JSON.parse( JSON.stringify( ipad ) ),
         watches: JSON.parse( JSON.stringify( watches ) ),
      },
   };
}
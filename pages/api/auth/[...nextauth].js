import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
   secret: process.env.SECRET,

   providers: [

      GoogleProvider( {
         clientId: process.env.GOOGLE_ID,
         clientSecret: process.env.GOOGLE_SECRET,
         authorization: {
            params: {
               prompt: "consent",
               access_type: "offline",
               response_type: "code"
            }
         }
      } ),
   ]
}
export default NextAuth( authOptions )
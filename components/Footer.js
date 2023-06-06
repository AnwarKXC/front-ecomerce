import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";


const BG = styled.div`
   background-color: #1D1D1F;
   color:#fff;
   position: static;
`;
const StyledFooter = styled.footer`
   display:flex;
   justify-content:space-between;
   gap:1rem;
`


const StyledUl = styled.div`
   list-style:none;
   display:flex;
   flex-direction:column;
   gap:.7rem;
   


`;
const StyledLink = styled( Link )`
   color:#aaa;
   text-decoration:none;
   font-size:10px;
   display:flex;
   gap:5px;
   :hover{
   color:#fff;
   transition:400ms;
   };
   svg{
      width:20px;
      height:20px;
   }
      @media screen and (min-width: 768px) {
            font-size:12px;
      }

`;
const Styleddiv = styled.div`
   display:flex;
   gap:10px
`




export default function Footer () {
   return (
      <BG>
         <Center>
            <StyledFooter>
               <StyledUl >
                  <div style={ { "margin-bottom": "10px", "font-size": "12px" } }> COMPANY INFO </div>
                  <div ><StyledLink href={ '' }> About</StyledLink></div>
                  <div ><StyledLink href={ '/shipping-info' }> Shipping & Return</StyledLink></div>
               </StyledUl>
               <StyledUl>
                  <div style={ { "margin-bottom": "10px", "font-size": "12px" } } >FIND US ON</div>
                  <div><StyledLink aria-label="Product" href={ 'https://www.facebook.com/groups/1906603669483476' } target="_blank"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook-f"><path fill="#6563FF" d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg>Group</StyledLink></div>
                  <div><StyledLink aria-label="Product" href={ 'https://www.facebook.com/profile.php?id=100083273744429' } target="_blank"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook"><path fill="#535AD8" d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path></svg>Page</StyledLink></div>
               </StyledUl>
               <StyledUl style={ { "align-items": "center", } }>
                  <div style={ { "font-size": "12px" } }><span style={ { "color": "#999", "padding-right": "5px", "font-size": "10px" } }> by </span>Anwar kamal</div>
                  <div ><StyledLink aria-label="CV" href={ '/+201026265857.pdf' } target="_blank">View Resume</StyledLink></div>
                  <div>
                     <Styleddiv >
                        <StyledLink href={ 'https://www.linkedin.com/in/anwar-kamal-11a719252/' } aria-label="linkedin profile" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin"><path fill="#242ED8" d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg></StyledLink>
                        <StyledLink href={ 'https://github.com/AnwarKXC' } target="_blank" aria-label="GitHub profile" ><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github"><path fill="#FFFFFF" d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg></StyledLink>
                        <StyledLink href={ 'https://www.facebook.com/nourr.xd' } target="_blank" aria-label="Facebook profile"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook-f"><path fill="#026EFF" d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg></StyledLink>
                        <StyledLink href={ 'https://wa.link/vuqau2' } target="_blank" aria-label="whatsapp profile"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="whatsapp-alt"><path fill="#12BF08" d="M22,6.55a12.61,12.61,0,0,0-.1-1.29,4.29,4.29,0,0,0-.37-1.08,3.66,3.66,0,0,0-.71-1,3.91,3.91,0,0,0-1-.71,4.28,4.28,0,0,0-1.08-.36A10.21,10.21,0,0,0,17.46,2H6.55a12.61,12.61,0,0,0-1.29.1,4.29,4.29,0,0,0-1.08.37,3.66,3.66,0,0,0-1,.71,3.91,3.91,0,0,0-.71,1,4.28,4.28,0,0,0-.36,1.08A10.21,10.21,0,0,0,2,6.54C2,6.73,2,7,2,7.08v9.84c0,.11,0,.35,0,.53a12.61,12.61,0,0,0,.1,1.29,4.29,4.29,0,0,0,.37,1.08,3.66,3.66,0,0,0,.71,1,3.91,3.91,0,0,0,1,.71,4.28,4.28,0,0,0,1.08.36A10.21,10.21,0,0,0,6.54,22H17.45a12.61,12.61,0,0,0,1.29-.1,4.29,4.29,0,0,0,1.08-.37,3.66,3.66,0,0,0,1-.71,3.91,3.91,0,0,0,.71-1,4.28,4.28,0,0,0,.36-1.08A10.21,10.21,0,0,0,22,17.46c0-.19,0-.43,0-.54V7.08C22,7,22,6.73,22,6.55ZM12.23,19h0A7.12,7.12,0,0,1,8.8,18.1L5,19.1l1-3.72a7.11,7.11,0,0,1-1-3.58A7.18,7.18,0,1,1,12.23,19Zm0-13.13A6,6,0,0,0,7.18,15l.14.23-.6,2.19L9,16.8l.22.13a6,6,0,0,0,3,.83h0a6,6,0,0,0,6-6,6,6,0,0,0-6-6Zm3.5,8.52a1.82,1.82,0,0,1-1.21.85,2.33,2.33,0,0,1-1.12-.07,8.9,8.9,0,0,1-1-.38,8,8,0,0,1-3.06-2.7,3.48,3.48,0,0,1-.73-1.85,2,2,0,0,1,.63-1.5.65.65,0,0,1,.48-.22H10c.11,0,.26,0,.4.31s.51,1.24.56,1.33a.34.34,0,0,1,0,.31,1.14,1.14,0,0,1-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.56,5.56,0,0,0,1,1.24,5,5,0,0,0,1.44.89c.18.09.29.08.39,0s.45-.52.57-.7.24-.15.4-.09,1.05.49,1.23.58.29.13.34.21A1.56,1.56,0,0,1,15.73,14.36Z"></path></svg></StyledLink>
                     </Styleddiv>
                  </div>
                  <div><StyledLink aria-label="mail to" href={ 'mailto:anwarK.code@gmail.com' } target="_blank" >anwarK.code@gmail.com</StyledLink></div>
                  <div style={ { "font-size": "12px", "color": "#8888" } }> ©2022-2023  All Rights Reserved</div>
               </StyledUl>
            </StyledFooter>
         </Center>
      </BG>
   )
}
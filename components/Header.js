import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { useSession, signIn, signOut } from "next-auth/react"

const ButtonStyle = styled.button`
  border:0;
  padding: .5rem 1rem;
  border-radius: 7px;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
font-family: 'Manrope', sans-serif;
  font-weight:500;
  svg{
    height: 25px;
    margin:-.5rem 0rem;
  }
`

const StyledHeader = styled.header`
  background-color: #1D1D1F;

`;
const Logo = styled( Link )`
  color:#fff;
  text-decoration:none;
  z-index: 999;
  padding-left:15px;
  margin-top:-5px;
  font-size:1.rem;
  @media screen and (min-width: 768px) {
    font-size:1.5rem;
    padding-left:0;
    margin-top:0;
      position: relative;

  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  gap:15px;
  padding: 15px 0;
`;
const StyledNav = styled.nav`
  ${ props => props.mobileNavActive ? `
    display: block;
    
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align:center;
  z-index:99;
  padding: 150px 20px 0px;
    background-color: #1D1D1F;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    align-items: center;
    padding: 0;
  }
`;

const CART=styled( Link )`
  display: flex;
  color:#999;
  z-index:9999;
  text-decoration:none;
  justify-content:center;
  padding: 15px 0;
  @media screen and (min-width: 768px) {
    padding:0;
      position: relative;

  }
  svg{
    width:35px;
    height:35px;
    color:white;
  }

`

const NavLink = styled( Link )`
  display: flex;
  color:#999;
  text-decoration:none;
  justify-content:center;
  padding: 15px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
  svg{
    width:35px;
    height:35px;
    color:white;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
    position: relative;
  width: 40px;
  height: 40px;
  border:0;
  color: white;
  cursor: pointer;
  z-index: 999999999999999;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header () {

  const { data: session } = useSession()
  const { cartProducts } = useContext( CartContext );
  const [ mobileNavActive, setMobileNavActive ] = useState( false );

  if ( !session ) {
    return (
      <StyledHeader>
        <Center>
          <Wrapper>
            <Logo href={ '/' }>E-commerce</Logo>
            <div>
              <StyledNav mobileNavActive={ mobileNavActive }>
                <NavLink href={ '/' }>Home</NavLink>
                <NavLink href={ '/products' }>All products</NavLink>
                <NavLink href={ '/categories' }>Categories</NavLink>
                <NavLink href={ '/account' }>Account</NavLink>
                <ButtonStyle onClick={ signIn }> Login <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                </ButtonStyle>
              </StyledNav>
            </div>
            <Wrapper>
              <CART href={ '/cart' }><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
                <span style={{color:"white"}}>{ cartProducts.length }</span></CART>
              <NavButton onClick={ () => setMobileNavActive( prev => !prev ) }>
                <BarsIcon />
              </NavButton>
            </Wrapper>
          </Wrapper>
        </Center>
      </StyledHeader>
    )

  } else {
    return (
      <StyledHeader>
        <Center>
          <Wrapper>
            <Logo href={ '/' }>E-commerce</Logo>
            <div>
              <StyledNav mobileNavActive={ mobileNavActive }>
                <NavLink href={ '/' }>Home</NavLink>
                <NavLink href={ '/products' }>All products</NavLink>
                <NavLink href={ '/categories' }>Categories</NavLink>
                <NavLink href={ '/account' }>Account</NavLink>
                <ButtonStyle onClick={ signOut }> SignOut <svg xmlns="http://www.w3.org/2000/svg" fill="#1D1D1F" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                </ButtonStyle>
              </StyledNav>
            </div>
            <Wrapper>
              <CART href={ '/cart' }><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
                <span style={ { color: "white" } }>{ cartProducts.length }</span></CART>
              <NavButton onClick={ () => setMobileNavActive( prev => !prev ) }>
                <BarsIcon />
              </NavButton>
            </Wrapper>
          </Wrapper>
        </Center>
      </StyledHeader>

    )
  }
  ;
}








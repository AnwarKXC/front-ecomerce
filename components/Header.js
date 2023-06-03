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
  font-family: 'Poppins', sans-serif;
  font-weight:500;
  svg{
    height: 20px;
    margin:-5px 7px;
  }
`

const StyledHeader = styled.header`
  background-color: #1D1D1F;

`;
const Logo = styled( Link )`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
  padding-left:15px;
  margin-top:-5px;
  font-size:1.rem;
    @media screen and (min-width: 768px) {
  font-size:1.5rem;
    padding-left:0;
  margin-top:0;
    }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
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
  padding: 70px 20px 20px;
  background-color: #1D1D1F;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    align-items: center;
    padding: 0;
  }
`;
const NavLink = styled( Link )`
  display: block;
  color:#999;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
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
            <StyledNav mobileNavActive={ mobileNavActive }>
              <NavLink href={ '/' }>Home</NavLink>
              <NavLink href={ '/products' }>All products</NavLink>
              <NavLink href={ '/categories' }>Categories</NavLink>
              <NavLink href={ '/account' }>Account</NavLink>
              <NavLink href={ '/cart' }>Cart ({ cartProducts.length })</NavLink>
              <ButtonStyle onClick={ signIn }> Login <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              </ButtonStyle>
            </StyledNav>
            <NavButton onClick={ () => setMobileNavActive( prev => !prev ) }>
              <BarsIcon />
            </NavButton>
          </Wrapper>
        </Center>
      </StyledHeader>
    )

  } else {
    return (
      <StyledHeader>
        <Center>
          <Wrapper>
            <Logo href={ '/' }>Ecommerce</Logo>
            <StyledNav mobileNavActive={ mobileNavActive }>
              <NavLink href={ '/' }>Home</NavLink>
              <NavLink href={ '/products' }>All products</NavLink>
              <NavLink href={ '/categories' }>Categories</NavLink>
              <NavLink href={ '/account' }>Account</NavLink>
              <NavLink href={ '/cart' }>Cart ({ cartProducts.length })</NavLink>
              <ButtonStyle onClick={ signOut }> SignOut <svg xmlns="http://www.w3.org/2000/svg" fill="#1D1D1F" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              </ButtonStyle>
            </StyledNav>
            <NavButton onClick={ () => setMobileNavActive( prev => !prev ) }>
              <BarsIcon />
            </NavButton>
          </Wrapper>
        </Center>
      </StyledHeader>

    )
  }
  ;
}
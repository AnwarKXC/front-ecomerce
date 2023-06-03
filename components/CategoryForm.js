import styled from "styled-components";




const StyledProducts = styled.div`
  position:relative;
  background-color: #fff;
  padding:0 5px ;
  margin:2rem 0;
  height: 250px;
  text-align: start;
  display: flex;
  align-items: start;
  justify-content: start;
  box-shadow: 0 0 50px -10px rgb(0 0 0 / 0.30);
  img{
    max-width: 100%;
    max-height: 120px;
  };
  overflow:hidden;
`;


export default function CategoryForm({children}) {
  return (
    <StyledProducts>
      { children}
    </StyledProducts>
  )
}
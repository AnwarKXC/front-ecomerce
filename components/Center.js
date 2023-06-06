import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1024px;
  margin: 0 auto ;
  padding:30px 5px;
  @media screen and (min-width: 768px) {
    padding:30px 15px;
  }
`;

export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}
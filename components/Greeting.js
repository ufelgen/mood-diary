import styled from "styled-components";

export default function Greeting({ greeting }) {
  return (
    <StyledGreeting>
      {greeting} <br></br> liebe Johanna
    </StyledGreeting>
  );
}

const StyledGreeting = styled.h1`
  background-color: darkmagenta;
  color: white;
  border: 1px solid hotpink;
  padding: 3px;
  margin-bottom: 177px;
  text-align: center;
`;

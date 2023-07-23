// not in use

import styled from "styled-components";

export default function RandomButton({ buttonFunction }) {
  return <StyledButton onClick={buttonFunction}>hier klicken!</StyledButton>;
}

const StyledButton = styled.button`
  background-color: black;
  color: white;
  padding: 2rem;
  border: 1px solid darkmagenta;
  border-radius: 5px;
  font-weight: bold;
  font-size: 40px;
  margin-top: 10vh;
`;

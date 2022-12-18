import styled from "styled-components";

export default function RandomImageButton({ randomImage }) {
  return <StyledButton onClick={randomImage}>click me!</StyledButton>;
}

const StyledButton = styled.button`
  background-color: hotpink;
  color: white;
  padding: 2rem;
  border: 1px solid darkmagenta;
  border-radius: 5px;
  font-weight: bold;
  font-size: 40px;
`;

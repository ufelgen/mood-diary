import styled from "styled-components";

export default function RandomImageButton({ randomImage }) {
  return <StyledButton onClick={randomImage}>hier klicken!</StyledButton>;
}

const StyledButton = styled.button`
  background-color: darkcyan;
  color: white;
  padding: 2rem;
  border: 1px solid darkmagenta;
  border-radius: 5px;
  font-weight: bold;
  font-size: 40px;
`;

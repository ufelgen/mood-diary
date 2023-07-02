import styled from "styled-components";

export default function BeProud() {
  return (
    <StyledDiv>
      <p>Du hast es geschafft!</p>
      <p>Du kannst stolz auf dich sein!</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: fixed;
  height: auto;
  width: 80vw;
  top: 30vh;
  margin-left: 10vw;

  background-color: lightgoldenrodyellow;
  color: var(--primary);
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  z-index: 10;
`;

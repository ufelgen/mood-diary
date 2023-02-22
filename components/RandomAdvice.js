import styled from "styled-components";

export default function RandomAdvice({ advice }) {
  return (
    <>
      <StyledAdviceContainer>
        <StyledP>Dein Rat: </StyledP>
        <StyledAdvice>{advice}</StyledAdvice>
      </StyledAdviceContainer>
    </>
  );
}

const StyledAdviceContainer = styled.section`
  margin: 10vh 5vh;
  padding: 5vh;
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
`;

const StyledP = styled.p`
  color: var(--primary);
`;
const StyledAdvice = styled.p`
  font-size: 1.5rem;
`;

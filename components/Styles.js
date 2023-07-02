import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0rem 2rem 5rem 2rem;
  padding: 1rem;
  background-color: var(--primary);
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0.5rem;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    label {
      padding-right: 0.5rem;
    }
  }
  button {
    padding: 0.3rem;
    margin-left: 0.7rem;
    margin-right: -0.5rem;
    background-color: hotpink;
    color: white;
    border: none;
    border-radius: 3px;
  }
`;

export const StyledPageMain = styled.main`
  position: relative;
  height: 100vh;
  margin-bottom: 20vh;
  background: var(--background-gradient-2);
`;

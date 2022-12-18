import styled from "styled-components";
import Image from "next/image";

export default function RandomImage({ setImage }) {
  return (
    <StyledImagePage>
      <Image
        src="https://source.unsplash.com/random/300×300/?animal/"
        alt="cute animal"
        width={300}
        height={300}
      />
      <button onClick={() => setImage(false)}>back</button>
    </StyledImagePage>
  );
}

const StyledImagePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    background-color: hotpink;
    color: white;
    padding: 2rem;
    border: 1px solid darkmagenta;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    width: 50%;
  }
`;

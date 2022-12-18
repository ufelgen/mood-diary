import RandomImageButton from "../components/RandomImageButton";
import RandomImage from "../components/RandomImage";
import styled from "styled-components";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(false);
  function handleRandomImage() {
    setImage(true);
  }

  return (
    <StyledMain>
      {image ? (
        <RandomImage setImage={setImage}></RandomImage>
      ) : (
        <RandomImageButton randomImage={handleRandomImage} />
      )}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: wheat;
`;

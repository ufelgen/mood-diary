import RandomImageButton from "../components/RandomImageButton";
import RandomImage from "../components/RandomImage";
import Greeting from "../components/Greeting";
import { getGreeting } from "../helpers/getGreeting";
import styled from "styled-components";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(false);
  function handleRandomImage() {
    setImage(true);
  }

  const greeting = getGreeting();

  return (
    <StyledMain>
      {image ? (
        <RandomImage setImage={setImage} />
      ) : (
        <>
          <Greeting greeting={greeting} />
          <RandomImageButton randomImage={handleRandomImage} />
        </>
      )}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: darkcyan;
`;

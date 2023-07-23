import RandomButton from "../components/RandomImageButton";
import RandomImage from "../components/RandomImage";
import Greeting from "../components/Greeting";
import Footer from "../components/Footer";
import { getGreeting } from "../helpers/getGreeting";
import styled from "styled-components";
import { useState } from "react";
import format from "date-fns/format";
import dynamic from "next/dynamic";
import Header from "../components/Header";

export default function Home() {
  const [image, setImage] = useState(false);
  function handleRandomImage() {
    setImage(!image);
  }

  const greeting = getGreeting();

  const today = format(new Date(), "dd-MM");

  const { height, width } = dynamic(() => import("../helpers/useWindowSize"), {
    ssr: false,
  });

  const Confetti = dynamic(() => import("react-confetti"), {
    ssr: false,
  });

  return (
    <StyledMain>
      <Header />
      {today === "10-02" && <Confetti height={height} width={width} />}
      {image ? (
        <RandomImage randomImage={handleRandomImage} />
      ) : (
        <>
          <Greeting greeting={greeting} />
          <RandomButton buttonFunction={handleRandomImage} />
        </>
      )}
      <Footer />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 10vh 0;
  background: var(--background-gradient);
`;

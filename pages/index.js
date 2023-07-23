import RandomButton from "../components/RandomImageButton";
import RandomImage from "../components/RandomImage";
import Greeting from "../components/Greeting";
import Footer from "../components/Footer";
import { getGreeting } from "../helpers/getGreeting";
import { useState } from "react";
import format from "date-fns/format";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import { StyledMain } from "../components/Styles";

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
      <Greeting greeting={greeting} />
      <RandomImage />

      <Footer />
    </StyledMain>
  );
}

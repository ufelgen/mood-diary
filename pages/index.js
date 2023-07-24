import RandomImage from "../components/RandomImage";
import Greeting from "../components/Greeting";
import Footer from "../components/Footer";
import { getGreeting } from "../helpers/getGreeting";
import { useSession } from "next-auth/react";
import format from "date-fns/format";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import { StyledMain } from "../components/Styles";
import styled from "styled-components";
import Fireworks from "@fireworks-js/react";
import { useState, useEffect } from "react";
//import { Fireworks, useFireworks } from "@fireworks-js/react";

export default function Home({ profile }) {
  if (!profile) {
    return null;
  }

  const { data: session } = useSession();

  const userProfile = profile?.find(
    (profile) => profile.user === session?.user.email
  );

  const [fireworks, setFireworks] = useState(false);

  const userBirthday = userProfile?.birthday.slice(5);

  const greeting = getGreeting(userBirthday);

  const today = format(new Date(), "MM-dd");

  const { height, width } = dynamic(() => import("../helpers/useWindowSize"), {
    ssr: false,
  });

  /*   const Confetti = dynamic(() => import("react-confetti"), {
    ssr: false,
  });
 */
  const Fireworks = dynamic(() => import("@fireworks-js/react"), {
    ssr: false,
  });

  useEffect(() => {
    setFireworks(true);
    setTimeout(handleFireworksStop, 7000);
  }, []);

  function handleFireworksStop() {
    setFireworks(false);
  }

  return (
    <StyledMain>
      <Header />
      {today === userBirthday && fireworks && (
        <StyledFireworks height={height} width={width} />
      )}
      <Greeting greeting={greeting} userProfile={userProfile} />
      <RandomImage />

      <Footer />
    </StyledMain>
  );
}

const StyledFireworks = styled(Fireworks)`
  z-index: 10;
`;

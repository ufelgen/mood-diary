import RandomImage from "../components/RandomImage";
import Greeting from "../components/Greeting";
import Footer from "../components/Footer";
import { getGreeting } from "../helpers/getGreeting";
import { useSession } from "next-auth/react";
import format from "date-fns/format";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import { StyledMain } from "../components/Styles";

export default function Home({ profile }) {
  if (!profile) {
    return null;
  }

  const { data: session } = useSession();

  const userProfile = profile?.find(
    (profile) => profile.user === session?.user.email
  );

  console.log("userProfile", userProfile);

  const userBirthday = userProfile?.birthday.slice(5);

  const greeting = getGreeting(userBirthday);

  const today = format(new Date(), "MM-dd");

  const { height, width } = dynamic(() => import("../helpers/useWindowSize"), {
    ssr: false,
  });

  const Confetti = dynamic(() => import("react-confetti"), {
    ssr: false,
  });

  return (
    <StyledMain>
      <Header />
      {today === userBirthday && <Confetti height={height} width={width} />}
      <Greeting greeting={greeting} userProfile={userProfile} />
      <RandomImage />

      <Footer />
    </StyledMain>
  );
}

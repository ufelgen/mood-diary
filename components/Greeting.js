import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function Greeting({ greeting, userProfile }) {
  if (!userProfile) {
    return null;
  }

  const { data: session } = useSession();

  function determineDear() {
    if (userProfile.gender === "female") {
      const gender = "liebe";
      return gender;
    } else if (userProfile.gender === "male") {
      const gender = "lieber";
      return gender;
    } else if (userProfile.gender === "diverse") {
      const gender = "";
      return gender;
    } else {
      return;
    }
  }

  const dear = determineDear();

  return (
    <StyledGreeting>
      {userProfile?.firstName ? (
        <>
          {greeting}, <br></br> {dear} {userProfile.firstName}
        </>
      ) : (
        { greeting }
      )}
    </StyledGreeting>
  );
}

const StyledGreeting = styled.h2`
  background-color: darkmagenta;
  color: white;
  border: 1px solid hotpink;
  padding: 30px;
  margin: 20vh 1rem auto 1rem;
  text-align: center;
  z-index: 5;
`;

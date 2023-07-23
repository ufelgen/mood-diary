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
        <p>was soll das</p>
      )}
    </StyledGreeting>
  );
}

const StyledGreeting = styled.h1`
  background-color: darkmagenta;
  color: white;
  border: 1px solid hotpink;
  padding: 30px;
  margin-bottom: 177px;
  text-align: center;
  z-index: 5;
`;

import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { BiUserCircle, BiLogIn, BiLogOut } from "react-icons/bi";

export default function Header() {
  const { pathname } = useRouter();
  const { data: session } = useSession();

  function handleSignIn(event) {
    event.preventDefault();
    signIn();
  }
  return (
    <StyledHeader>
      {session ? (
        <button onClick={() => signOut()}>
          <StyledLogoutIcon />
        </button>
      ) : (
        <button onClick={(event) => handleSignIn(event)}>
          <StyledLoginIcon />
        </button>
      )}
      {pathname !== "/profile" && (
        <Link href={"/profile"}>
          <StyledProfileIcon aria-label="go to profile page" />
        </Link>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 5vw;

  button {
    border: none;
    background-color: transparent;
  }
`;

const StyledProfileIcon = styled(BiUserCircle)`
  color: var(--primary);
  font-size: 7.7vh;
`;

const StyledLoginIcon = styled(BiLogIn)`
  color: var(--primary);
  font-size: 7.7vh;
`;

const StyledLogoutIcon = styled(BiLogOut)`
  color: var(--primary);
  font-size: 7.7vh;
`;

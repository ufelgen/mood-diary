import styled from "styled-components";
import { RxCalendar } from "react-icons/rx";
import { VscHome } from "react-icons/vsc";
import { FaLightbulb, FaHandsHelping } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Footer({ profile }) {
  const { pathname } = useRouter();
  if (!profile) {
    return null;
  }

  const { data: session } = useSession();

  const userProfile = profile?.find(
    (profile) => profile.user === session?.user.email
  );

  return (
    <StyledFooter>
      {pathname === "/" ? (
        <>
          <Link href={"/calendar"}>
            <StyledCalendarIcon aria-label="go to calendar" />
          </Link>
          <Link href={"/advice"}>
            <StyledIdeaIcon aria-label="go to advice page" />
          </Link>
          <Link href={"/kanban"}>
            <StyledToDoIcon aria-label="go to to do list page" />
          </Link>
          {userProfile?.user === "flo@example.com" && (
            <Link href={"/help"}>
              <StyleHelpIcon aria-label="go to help page" />
            </Link>
          )}
        </>
      ) : (
        <>
          <Link href={"/"}>
            <StyledHomeIcon aria-label="return to main page" />
          </Link>
        </>
      )}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
`;

const StyledCalendarIcon = styled(RxCalendar)`
  color: var(--primary);
  font-size: 7.7vh;
`;

const StyledIdeaIcon = styled(FaLightbulb)`
  color: var(--primary);
  font-size: 7.7vh;
`;

const StyledHomeIcon = styled(VscHome)`
  color: var(--primary);
  font-size: 7.7vh;
`;

const StyledToDoIcon = styled(BiNotepad)`
  color: var(--primary);
  font-size: 7.7vh;
`;

const StyleHelpIcon = styled(FaHandsHelping)`
  color: var(--primary);
  font-size: 7.7vh;
`;

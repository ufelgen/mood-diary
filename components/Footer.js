import styled from "styled-components";
import { RxCalendar } from "react-icons/rx";
import { VscHome } from "react-icons/vsc";
import { FaLightbulb } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <StyledFooter>
      {pathname !== "/" ? (
        <Link href={"/"}>
          <StyledHomeIcon aria-label="return to main page" />
        </Link>
      ) : (
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

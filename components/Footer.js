import styled from "styled-components";
import { RxCalendar } from "react-icons/rx";
import { VscHome } from "react-icons/vsc";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <StyledFooter>
      {pathname === "/calendar" ? (
        <Link href={"/"}>
          <StyledHomeIcon aria-label="return to main page" />
        </Link>
      ) : (
        <Link href={"/calendar"}>
          <StyledCalendarIcon aria-label="go to calendar" />
        </Link>
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
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const StyledCalendarIcon = styled(RxCalendar)`
  color: var(--primary);
  font-size: 7.7vh;
`;

const StyledHomeIcon = styled(VscHome)`
  color: var(--primary);
  font-size: 7.7vh;
`;

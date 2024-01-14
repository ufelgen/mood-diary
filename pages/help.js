import styled from "styled-components";
import Footer from "../components/Footer";
import format from "date-fns/format";
import { beratungsstellen } from "../helpers/beratungsstellen";

export default function Help() {
  const today = new Date();
  const weekday = today.getDay();

  function getWeekday() {
    if (weekday === 0) {
      return "Sonntag";
    } else if (weekday === 1) {
      return "Montag";
    } else if (weekday === 2) {
      return "Dienstag";
    } else if (weekday === 3) {
      return "Mittwoch";
    } else if (weekday === 4) {
      return "Donnerstag";
    } else if (weekday === 5) {
      return "Freitag";
    } else if (weekday === 6) {
      return "Samstag";
    }
  }

  const wochentag = getWeekday();
  const uhrzeit = format(today, "h:mm a");

  console.log(today, wochentag, uhrzeit);

  const openOnesToday = beratungsstellen.map((stelle) =>
    stelle.openingTimes[0].day === wochentag ||
    stelle.openingTimes[1]?.day === wochentag ||
    stelle.openingTimes[2]?.day === wochentag ||
    stelle.openingTimes[3]?.day === wochentag ||
    stelle.openingTimes[4]?.day === wochentag
      ? { ...stelle, isOpenToday: true }
      : stelle
  );

  const openOnesTodayOnly = openOnesToday.filter(
    (stelle) => stelle.isOpenToday
  );

  const openOnesTodayOnlyOneObject = openOnesTodayOnly.map((stelle) =>
    stelle.openingTimes.map((time) =>
      time.day === wochentag ? { ...stelle, openingTimes: time } : null
    )
  );
  console.log("openOnesTodayOnly", openOnesTodayOnly);

  /*   const openOnesToday = beratungsstellen.filter((stelle) => {
    return (
      stelle.openingTimes[0].day === wochentag ||
      stelle.openingTimes[1]?.day === wochentag ||
      stelle.openingTimes[2]?.day === wochentag ||
      stelle.openingTimes[3]?.day === wochentag ||
      stelle.openingTimes[4]?.day === wochentag
    );
  }); */

  /*   const openOnesTodayOnlyToday = openOnesToday.filter((stelle) =>
    stelle.openingTimes.filter((time) => {
      return time.day === wochentag;
    })
  );

  console.log("openOnesTodayOnlyToday", openOnesTodayOnlyToday); */

  /*   const openOnesRightNow = openOnesTodayOnlyToday.filter((stelle) => {
    return (
      stelle.openingTimes[0].open < uhrzeit &&
      stelle.openingTimes[0].close > uhrzeit
    );
  }); */

  return (
    <>
      <StyledHelpPage>
        <h2>Heute ist {wochentag},</h2>
        <p>Es ist {uhrzeit}</p>
      </StyledHelpPage>
      <Footer />
    </>
  );
}

const StyledHelpPage = styled.main`
  background: purple;
  color: white;
  position: fixed;
  top: 10vh;
  bottom: 10vh;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;

  p,
  h2 {
    text-align: center;
    margin-top: 40vh;
  }
`;

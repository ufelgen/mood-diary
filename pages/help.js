import styled from "styled-components";
import Footer from "../components/Footer";
import format from "date-fns/format";
import Link from "next/link";
import { beratungsstellen } from "../helpers/beratungsstellen";
import { Fragment } from "react";

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
  const uhrzeit = format(today, "HH:mm");

  const openOnesToday = beratungsstellen.map((stelle) =>
    stelle.openingTimes[0].day === wochentag ||
    stelle.openingTimes[1]?.day === wochentag ||
    stelle.openingTimes[2]?.day === wochentag ||
    stelle.openingTimes[3]?.day === wochentag ||
    stelle.openingTimes[4]?.day === wochentag ||
    stelle.openingTimes[5]?.day === wochentag ||
    stelle.openingTimes[6]?.day === wochentag
      ? { ...stelle, isOpenToday: true }
      : stelle
  );

  const openOnesTodayOnly = openOnesToday.filter(
    (stelle) => stelle.isOpenToday
  );

  const openOnesTodayOnlyOneObject = openOnesTodayOnly.map((stelle) =>
    stelle.openingTimes.map(
      (time) => time.day === wochentag && { ...stelle, openingTimes: time }
    )
  );

  const huhuTesti = openOnesTodayOnlyOneObject.map((array) =>
    array.map(
      (stelle) =>
        stelle.openingTimes?.open < uhrzeit &&
        stelle.openingTimes?.close > uhrzeit && {
          ...stelle,
          isOpenRightNow: true,
        }
    )
  );

  return (
    <>
      <StyledHelpPage>
        <h2>Heute ist {wochentag},</h2>
        <p>Es ist {uhrzeit}</p>
        <p>Diese Stellen sind gerade erreichbar:</p>
        {huhuTesti.map((huhu) =>
          huhu?.map((testi) => {
            return (
              <Fragment key={testi?.name}>
                {testi?.link && (
                  <StyledStelle>
                    <p>
                      <Link href={testi?.link}>{testi?.name}</Link>
                    </p>
                    <p>Telefon: {testi?.phone}</p>
                    {testi?.openingTimes?.open && (
                      <p>
                        Heute {testi?.openingTimes?.open} -{" "}
                        {testi?.openingTimes?.close} Uhr
                      </p>
                    )}
                  </StyledStelle>
                )}
              </Fragment>
            );
          })
        )}
        <div>
          {" "}
          <p>
            {" "}
            <Link href="/stellen">Übersicht aller Stellen</Link>
          </p>
        </div>
      </StyledHelpPage>
      <Footer />
    </>
  );
}

const StyledHelpPage = styled.main`
  background: purple;
  color: white;
  position: fixed;
  top: 0;
  bottom: 10vh;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;

  p,
  h2 {
    text-align: center;
    margin: 0.5rem;
  }

  div {
    background-color: white;
    color: purple;
  }
`;

const StyledStelle = styled.article`
  border-top: 1px solid black;
`;

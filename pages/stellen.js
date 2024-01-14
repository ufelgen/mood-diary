import styled from "styled-components";
import Link from "next/link";
import { beratungsstellen } from "../helpers/beratungsstellen";
import Footer from "../components/Footer";

export default function Stellen() {
  return (
    <>
      {beratungsstellen.map((stelle) => {
        return (
          <>
            <p>
              <Link href={stelle?.link}>{stelle?.name}</Link>
            </p>
            <p>{stelle?.phone}</p>
            <p>Öffnungszeiten:</p>
            {stelle.openingTimes.map((time) => {
              return (
                <>
                  <p>
                    {time.day} {time.open} - {time.close} Uhr
                  </p>
                </>
              );
            })}
          </>
        );
      })}
      <Footer />
    </>
  );
}

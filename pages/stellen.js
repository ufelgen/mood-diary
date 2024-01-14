import Link from "next/link";
import { beratungsstellen } from "../helpers/beratungsstellen";
import Footer from "../components/Footer";
import { Fragment } from "react";

export default function Stellen() {
  return (
    <>
      {beratungsstellen.map((stelle) => {
        return (
          <Fragment key={stelle.name}>
            <p>
              <Link href={stelle?.link}>{stelle?.name}</Link>
            </p>
            <p>{stelle?.phone}</p>
            <p>Sprechzeiten:</p>
            {stelle.openingTimes.map((time) => {
              return (
                <>
                  <p>
                    {time.day} {time.open} - {time.close} Uhr
                  </p>
                </>
              );
            })}
          </Fragment>
        );
      })}
      <Footer />
    </>
  );
}

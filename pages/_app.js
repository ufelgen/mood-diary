import GlobalStyles from "../components/GlobalStyles";
import { useState, useEffect } from "react";
import fetchData from "../helpers/fetchData";

function MyApp({ Component, pageProps }) {
  const [allEntries, setAllEntries] = useState();

  useEffect(() => {
    async function performFetch() {
      const allEntriesFromDatabase = await fetchData();
      handleAllEntries(allEntriesFromDatabase);
    }
    performFetch();
  }, []);

  function handleAllEntries(entries) {
    setAllEntries(entries);
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        allEntries={allEntries}
        onAllEntries={handleAllEntries}
      />
    </>
  );
}

export default MyApp;

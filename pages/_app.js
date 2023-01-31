import GlobalStyles from "../components/GlobalStyles";
import { useState, useEffect } from "react";
import fetchData from "../helpers/fetchData";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
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
    <SessionProvider session={session}>
      <GlobalStyles />
      <Component
        {...pageProps}
        allEntries={allEntries}
        onAllEntries={handleAllEntries}
      />
    </SessionProvider>
  );
}

export default MyApp;

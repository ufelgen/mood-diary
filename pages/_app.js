import GlobalStyles from "../components/GlobalStyles";
import { useState, useEffect } from "react";
import { fetchEntryData, fetchTaskData } from "../helpers/fetchData";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [allEntries, setAllEntries] = useState();
  const [allTasks, setAllTasks] = useState();
  const [date, setDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    async function performFetch() {
      const allEntriesFromDatabase = await fetchEntryData();
      handleAllEntries(allEntriesFromDatabase);
    }
    performFetch();
  }, []);

  useEffect(() => {
    async function performFetch() {
      const allTasksFromDatabase = await fetchTaskData();
      handleAllTasks(allTasksFromDatabase);
    }
    performFetch();
  }, []);

  function handleAllEntries(entries) {
    setAllEntries(entries);
  }

  function handleAllTasks(tasks) {
    setAllTasks(tasks);
  }

  function handleShowForm(date) {
    setDate(date);
    setShowForm(true);
  }

  function handleHideForm() {
    setShowForm(false);
  }

  function handleToggleEditMode() {
    setEditing(!editing);
  }

  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <Component
        {...pageProps}
        allEntries={allEntries}
        onAllEntries={handleAllEntries}
        allTasks={allTasks}
        onAllTasks={handleAllTasks}
        showForm={showForm}
        onShowForm={handleShowForm}
        onHideForm={handleHideForm}
        date={date}
        editing={editing}
        toggleEditMode={handleToggleEditMode}
      />
    </SessionProvider>
  );
}

export default MyApp;

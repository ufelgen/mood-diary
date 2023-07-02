import styled from "styled-components";
import Footer from "../../components/Footer";
import { useState } from "react";
import { fetchTaskData } from "../../helpers/fetchData";
import { useSession, signIn, signOut } from "next-auth/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { StyledPageMain } from "../../components/Styles";
import dynamic from "next/dynamic";

import NewTask from "../../components/NewTask";
import TaskPage from "../../components/TaskPage";
import BeProud from "../../components/BeProud";

export default function KanbanBoardPage({
  allTasks = [],
  onAllTasks,
  showForm,
  onShowForm,
  onHideForm,
  editing,
  toggleEditMode,
}) {
  const { data: session } = useSession();

  const [status, setStatus] = useState("backlog");
  const [celebration, setCelebration] = useState(false);

  function handleStatus(status) {
    setStatus(status);
  }

  async function updateTasks(newTask) {
    await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    async function performFetch() {
      const allTasksFromDatabase = await fetchTaskData();
      onAllTasks(allTasksFromDatabase);
    }
    performFetch();
  }

  async function deleteTask(event, id) {
    event.preventDefault();

    const confirmation = confirm(
      "möchtest du dieses Vorhaben wirklich löschen?"
    );
    if (confirmation) {
      await fetch("/api/tasks/" + id, {
        method: "DELETE",
      });
      async function performFetch() {
        const allTasksFromDatabase = await fetchTaskData();
        onAllTasks(allTasksFromDatabase);
      }
      performFetch();
    } else {
      return;
    }
  }

  async function handleEditTask(updatedTask, id) {
    await fetch("/api/tasks/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    async function performFetch() {
      const allTasksFromDatabase = await fetchTaskData();
      onAllTasks(allTasksFromDatabase);
    }
    performFetch();
  }

  const { height, width } = dynamic(
    () => import("../../helpers/useWindowSize"),
    {
      ssr: false,
    }
  );

  const Confetti = dynamic(() => import("react-confetti"), {
    ssr: false,
  });

  function handleCelebration() {
    setCelebration(true);
    setTimeout(handleConfettiStop, 5000);
  }

  function handleConfettiStop() {
    setCelebration(false);
  }

  return (
    <StyledPageMain>
      {session ? (
        <>
          {celebration && (
            <>
              <Confetti height={height} width={width} /> <BeProud />
            </>
          )}
          <StyledAddButton onClick={onShowForm}>
            <AiFillPlusCircle />
          </StyledAddButton>
          <>
            {showForm ? (
              <NewTask onHideForm={onHideForm} onUpdateTasks={updateTasks} />
            ) : (
              <TaskPage
                allTasks={allTasks}
                onUpdateTasks={updateTasks}
                onDeleteTask={deleteTask}
                onEditTask={handleEditTask}
                status={status}
                onChangeStatus={handleStatus}
                editing={editing}
                toggleEditMode={toggleEditMode}
                onCelebration={handleCelebration}
              />
            )}
          </>

          <StyledLogoutButton onClick={() => signOut()}>
            abmelden
          </StyledLogoutButton>
        </>
      ) : (
        <StyledLoginButton onClick={() => signIn()}>anmelden</StyledLoginButton>
      )}

      <Footer />
    </StyledPageMain>
  );
}

const StyledLoginButton = styled.button`
  padding: 1rem;
  margin: 1rem;
  align-self: center;
  justify-self: center;
  color: white;
  background-color: var(--primary);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 2rem;

  position: fixed;
  bottom: 11vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogoutButton = styled(StyledLoginButton)`
  font-size: 1rem;
`;

const StyledAddButton = styled.button`
  background-color: transparent;
  color: var(--primary);
  font-size: 7.7vh;
  position: fixed;
  bottom: 12vh;
  right: 1rem;
  border: none;
  z-index: 5;
`;

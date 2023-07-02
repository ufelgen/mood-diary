import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Footer from "../../components/Footer";
import BelowCalendar from "../../components/BelowCalendar";
import { fetchEntryData } from "../../helpers/fetchData";
import { useSession, signIn, signOut } from "next-auth/react";
import { Badge } from "@mui/material";
import { GiChocolateBar } from "react-icons/gi";

export default function CalendarPage({
  allEntries = [],
  onAllEntries,
  showForm,
  onShowForm,
  onHideForm,
  date,
  editing,
  toggleEditMode,
}) {
  const { data: session } = useSession();

  async function updateEntries(newEntry) {
    await fetch("/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });
    async function performFetch() {
      const allEntriesFromDatabase = await fetchEntryData();
      onAllEntries(allEntriesFromDatabase);
    }
    performFetch();
  }

  async function deleteEntry(event, id) {
    event.preventDefault();

    const confirmation = confirm(
      "möchtest du diesen Eintrag wirklich löschen?"
    );
    if (confirmation) {
      await fetch("/api/entries/" + id, {
        method: "DELETE",
      });
      async function performFetch() {
        const allEntriesFromDatabase = await fetchEntryData();
        onAllEntries(allEntriesFromDatabase);
      }
      performFetch();
    }
  }

  async function handleUpdateEntry(updatedEntry, id) {
    await fetch("/api/entries/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEntry),
    });
    async function performFetch() {
      const allEntriesFromDatabase = await fetchEntryData();
      onAllEntries(allEntriesFromDatabase);
    }
    performFetch();
  }

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const selectedDay = date.getDate();
      const selectedMonth = date.getMonth() + 1;
      const selectedYear = date.getFullYear();

      const hasMood = allEntries.find((entry) => {
        const day = entry.date.split("-")[2];
        const month = entry.date.split("-")[1];
        const year = entry.date.split("-")[0];
        return (
          selectedDay == day && selectedMonth == month && selectedYear == year
        );
      });

      if (hasMood) {
        return hasMood.mood.split("-")[1];
      }
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const selectedDay = date.getDate();
      const selectedMonth = date.getMonth() + 1;
      const selectedYear = date.getFullYear();

      const hasPeriod = allEntries.find((entry) => {
        const day = entry.date.split("-")[2];
        const month = entry.date.split("-")[1];
        const year = entry.date.split("-")[0];
        return (
          selectedDay == day &&
          selectedMonth == month &&
          selectedYear == year &&
          entry.period
        );
      });

      if (hasPeriod) {
        return <Badge overlap="circular" badgeContent={<GiChocolateBar />} />;
      }
    }
  };

  return (
    <StyledCalenderPage>
      {session ? (
        <>
          <StyledCalendarContainer>
            <Calendar
              locale="de-DE"
              tileClassName={tileClassName}
              tileContent={tileContent}
              value={date}
              onClickDay={(value) => onShowForm(value)}
            />
          </StyledCalendarContainer>
          {showForm && (
            <BelowCalendar
              allEntries={allEntries}
              date={date}
              onUpdateEntries={updateEntries}
              onHideForm={onHideForm}
              onDeleteEntry={deleteEntry}
              onUpdateEntry={handleUpdateEntry}
              editing={editing}
              toggleEditMode={toggleEditMode}
            />
          )}
          <ButtonContainer>
            <StyledLogoutButton onClick={signOut}>abmelden</StyledLogoutButton>
          </ButtonContainer>
        </>
      ) : (
        <ButtonContainer>
          <StyledLoginButton onClick={() => signIn()}>
            anmelden
          </StyledLoginButton>
        </ButtonContainer>
      )}

      <Footer />
    </StyledCalenderPage>
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
`;

const StyledLogoutButton = styled(StyledLoginButton)`
  font-size: 1rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledCalenderPage = styled.main`
  height: 100vh;
  margin-bottom: 20vh;
  background: var(--background-gradient-2);
`;

const StyledCalendarContainer = styled.section`
  padding: 2rem;
  position: relative;
  button {
    margin: 2px;
    background-color: var(--secondary);
    border-radius: 3px;
    color: white;
  }
  .react-calendar__navigation button {
    margin: 2px;
    background-color: var(--primary);
    border-radius: 3px;
    color: white;
  }

  .react-calendar__tile--now {
    box-shadow: 0 0 2px 2px hotpink;
  }

  .react-calendar {
    border: none;
    border-radius: 4px;
    margin: auto;
    padding: 3px;
    box-shadow: 2px 2px 15px 2px #c4c4c4;
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
  }
  .react-calendar__month-view__days__day--weekend {
    color: black;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__tile--active {
    color: black;
  }
  .react-calendar__tile--active:enabled:hover {
    background: yellow;
  }
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;
    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }
    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  .MuiBadge-badge {
    position: absolute;
    top: 9px;
    right: -6px;
  }

  // classes for dynamic background

  .darkorchid {
    background: darkorchid;
    color: white;
  }
  .hotpink {
    background: hotpink;
    color: white;
  }

  .white {
    background: white;
    color: black;
  }

  .black {
    background: black;
    color: white;
  }

  .lightblue {
    background: lightblue;
    color: black;
  }

  .lightgrey {
    background: lightgrey;
    color: black;
  }

  ////
`;

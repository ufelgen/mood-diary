import styled from "styled-components";
import format from "date-fns/format";

export default function Entry({
  currentEntry,
  onDeleteEntry,
  onHideForm,
  onToggleEditMode,
}) {
  const mood = currentEntry?.mood.split("-")[0];
  const colour = currentEntry?.mood.split("-")[1];

  function handleDelete(event, id) {
    event.preventDefault();
    onDeleteEntry(event, id);
    onHideForm();
  }
  return (
    <StyledEntry>
      <p>Am {format(new Date(currentEntry?.date), "dd.MM.yyyy")}</p>
      <p
        style={{ backgroundColor: colour }}
        className={colour == "black" || colour == "darkorchid" ? "dark" : ""}
      >
        habe ich mich {mood} gefühlt,
      </p>
      <p>denn das war gut: {currentEntry?.good}</p>
      <p>und das war doof: {currentEntry?.bad}</p>
      {currentEntry?.period && <p>Außerdem hatte ich meine Tage.</p>}
      <div>
        <button onClick={(event) => handleDelete(event, currentEntry?.id)}>
          Eintrag löschen
        </button>
        <button onClick={onToggleEditMode}>Eintrag bearbeiten</button>
      </div>
    </StyledEntry>
  );
}

const StyledEntry = styled.section`
  margin: 0rem 2rem;
  padding: 1rem;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: black;
  .dark {
    color: white;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0.5rem;
  }

  button {
    padding: 0.3rem;
    margin-left: 1.3rem;
    margin-right: -0.5rem;
    background-color: hotpink;
    color: white;
    border: none;
    border-radius: 3px;
  }
`;

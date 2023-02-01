import styled from "styled-components";
import format from "date-fns/format";
import { colours } from "../helpers/colours";

export default function EditEntry({
  currentEntry,
  onToggleEditMode,
  onUpdateEntry,
}) {
  function handleEditedForm(event) {
    event.preventDefault();
    const updatedEntry = {
      ...currentEntry,
      mood: event.target.elements.colour.value,
      good: event.target.elements.good.value,
      bad: event.target.elements.bad.value,
    };

    onUpdateEntry(updatedEntry, currentEntry?.id);
    onToggleEditMode();
  }
  return (
    <StyledForm onSubmit={handleEditedForm}>
      <p>Am {format(new Date(currentEntry?.date), "dd.MM.yyyy")}</p>
      <p>habe ich mich</p>
      <label htmlFor="colour"></label>
      <select name="colour" defaultValue={currentEntry?.mood}>
        {colours.map((colour) => (
          <option value={colour.colour} key={colour.colour}>
            {colour.mood}
          </option>
        ))}
      </select>
      <p>gefühlt,</p>
      <p>denn das war gut:</p>
      <label htmlFor="good"></label>
      <textarea
        cols={20}
        rows={5}
        name="good"
        defaultValue={currentEntry?.good}
      />
      <p>und das war doof:</p>
      <label htmlFor="bad"></label>
      <textarea
        cols={20}
        rows={5}
        name="bad"
        defaultValue={currentEntry?.bad}
      />
      <div>
        <button type="button" onClick={onToggleEditMode}>
          zurück
        </button>
        <button type="submit">Änderungen speichern</button>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 0rem 2rem 5rem 2rem;
  padding: 1rem;
  background-color: var(--primary);
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

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

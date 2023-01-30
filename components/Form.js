import styled from "styled-components";
import format from "date-fns/format";
import { colours } from "../helpers/colours";

export default function Form({ date, onUpdateEntries, onHideForm }) {
  function handleSubmitForm(event) {
    event.preventDefault();
    const newEntry = {
      date: format(new Date(date), "yyyy-MM-dd"),
      mood: event.target.elements.colour.value,
      good: event.target.elements.good.value,
      bad: event.target.elements.bad.value,
    };

    onUpdateEntries(newEntry);
    onHideForm();
  }
  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <label htmlFor="colour">Wie fühlst du dich heute?</label>
      <select name="colour">
        {colours.map((colour) => (
          <option value={colour.colour} key={colour.colour}>
            {colour.mood}
          </option>
        ))}
      </select>
      <label htmlFor="good">Was ist heute schön?</label>
      <textarea cols={20} rows={5} name="good" />
      <label htmlFor="bad">Was ist heute doof?</label>
      <textarea cols={20} rows={5} name="bad" />
      <div>
        <button type="button" onClick={onHideForm}>
          zurück
        </button>
        <button type="submit">speichern</button>
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
    margin-left: 0.7rem;
    margin-right: -0.5rem;
    background-color: hotpink;
    color: white;
    border: none;
    border-radius: 3px;
  }
`;

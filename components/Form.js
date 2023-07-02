import { StyledForm } from "./Styles";
import format from "date-fns/format";
import { colours } from "../helpers/colours";
import useSound from "use-sound";

export default function Form({ date, onUpdateEntries, onHideForm }) {
  function getRandomNumber() {
    return Math.floor(Math.random() * 6);
  }
  const soundPath = "/assets/fart-" + getRandomNumber() + ".wav";
  const [play] = useSound(soundPath);

  function handleSubmitForm(event) {
    event.preventDefault();
    const newEntry = {
      date: format(new Date(date), "yyyy-MM-dd"),
      mood: event.target.elements.colour.value,
      good: event.target.elements.good.value,
      bad: event.target.elements.bad.value,
      period: event.target.elements.period.checked,
    };

    onUpdateEntries(newEntry);
    onHideForm();

    if (event.target.elements.colour.value === "schlecht-black") {
      play();
    }
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
      <section>
        <label htmlFor="period">Hast du deine Tage?</label>
        <input type="checkbox" name="period" value="period" />
      </section>
      <div>
        <button type="button" onClick={onHideForm}>
          zurück
        </button>
        <button type="submit">speichern</button>
      </div>
    </StyledForm>
  );
}

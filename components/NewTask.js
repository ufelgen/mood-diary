import styled from "styled-components";
import { StyledForm } from "./Styles";
import {
  determineLuminance,
  determineTextColour,
} from "../helpers/evaluateColour";

export default function NewTask({ onHideForm, onUpdateTasks }) {
  function handleAddNewTask(event) {
    event.preventDefault();

    const tooDark = determineLuminance(event.target.elements.taskColour.value);
    const textColour = determineTextColour(tooDark);

    const newTask = {
      headline: event.target.elements.taskHeadline.value,
      body: event.target.elements.taskBody.value,
      backgroundColour: event.target.elements.taskColour.value,
      textColour: textColour,
      status: "backlog",
    };

    onUpdateTasks(newTask);
    onHideForm();
    event.target.reset();
  }
  return (
    <>
      <StyledTaskForm onSubmit={(event) => handleAddNewTask(event)}>
        <label htmlFor="taskHeadline">Neues Vorhaben: </label>
        <input id="taskHeadline" name="taskHeadline" required />
        <label htmlFor="taskBody"></label>
        <textarea
          cols={20}
          rows={5}
          name="taskBody"
          id="taskBody"
          placeholder="Beschreibe, was du vorhast"
        />
        <section>
          <label htmlFor="taskColour">Füge eine Farbe hinzu</label>
          <input
            type="color"
            id="taskColour"
            name="taskColour"
            defaultValue="#ffffff"
          />
        </section>
        <div>
          <button type="button" onClick={onHideForm}>
            zurück
          </button>
          <button type="submit">speichern</button>
        </div>
      </StyledTaskForm>
    </>
  );
}

const StyledTaskForm = styled(StyledForm)`
  position: relative;
`;

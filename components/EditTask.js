import styled from "styled-components";
import { StyledForm } from "./Styles";
import {
  determineLuminance,
  determineTextColour,
} from "../helpers/evaluateColour";

export default function EditTask({
  currentTask,
  onEditTask,
  toggleEditMode,
  onCelebration,
}) {
  function handleEditedTask(event) {
    event.preventDefault();

    const tooDark = determineLuminance(event.target.elements.taskColour.value);
    const textColour = determineTextColour(tooDark);

    const editedTask = {
      ...currentTask,
      headline: event.target.elements.taskHeadline.value,
      body: event.target.elements.taskBody.value,
      backgroundColour: event.target.elements.taskColour.value,
      textColour: textColour,
      status: event.target.elements.taskStatus.value,
    };

    onEditTask(editedTask, currentTask.id);
    toggleEditMode();

    if (event.target.elements.taskStatus.value === "done") {
      onCelebration();
    }
  }
  return (
    <EditTaskForm
      onSubmit={(event) => handleEditedTask(event)}
      style={{ background: currentTask.colour }}
    >
      <input
        id="taskHeadline"
        name="taskHeadline"
        defaultValue={currentTask.headline}
      />
      <textarea
        cols={20}
        rows={5}
        name="taskBody"
        id="taskBody"
        defaultValue={currentTask.body}
      />
      <input
        type="color"
        id="taskColour"
        name="taskColour"
        defaultValue={currentTask.backgroundColour}
      />
      <select
        id="taskStatus"
        name="taskStatus"
        defaultValue={currentTask.status}
      >
        <option value="backlog" name="backlog">
          Backlog
        </option>
        <option value="ready" name="ready">
          Ready
        </option>
        <option value="wip" name="wip">
          in Arbeit
        </option>
        <option value="done" name="done">
          Fertig
        </option>
      </select>
      <div>
        <button type="button" onClick={toggleEditMode}>
          zurück
        </button>
        <button type="submit">Änderungen speichern</button>
      </div>
    </EditTaskForm>
  );
}

const EditTaskForm = styled(StyledForm)`
  margin: 1rem;
  padding: 0.5rem;
`;

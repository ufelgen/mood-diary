import { StyledForm } from "../components/Styles";
import styled from "styled-components";

export default function NewProfile({
  saveNewProfile,
  userProfile,
  toggleEditMode,
  editing,
  onUpdateProfile,
}) {
  function inputUserData(event) {
    event.preventDefault();
    const newProfile = {
      firstName: event.target.elements.firstName.value,
      lastName: event.target.elements.lastName.value,
      gender: event.target.elements.gender.value,
      birthday: event.target.elements.birthday.value,
    };

    if (editing) {
      onUpdateProfile(newProfile, userProfile.id);
      toggleEditMode();
    } else {
      saveNewProfile(newProfile);
    }

    event.target.reset();
  }

  return (
    <StyledForm onSubmit={(event) => inputUserData(event)}>
      <label htmlFor="firstName">Vorname: </label>
      <input
        id="firstName"
        name="firstName"
        defaultValue={userProfile?.firstName}
        required
      />
      <label htmlFor="lastName">Nachname: </label>
      <input
        id="lastName"
        name="lastName"
        defaultValue={userProfile?.lastName}
        required
      />
      <label htmlFor="gender">Geschlecht: </label>
      <select
        id="gender"
        name="gender"
        defaultValue={userProfile?.gender}
        required
      >
        <option value="" disabled>
          bitte wählen
        </option>
        <option value="female">weiblich</option>
        <option value="male">männlich</option>
        <option value="diverse">divers</option>
        <option value="notSpecified">keine Angabe</option>
      </select>
      <label htmlFor="birthday" required>
        Geburtstag:
      </label>
      <input
        type="date"
        id="birthday"
        name="birthday"
        defaultValue={userProfile?.birthday}
      />
      <div>
        {editing && (
          <button type="button" onClick={toggleEditMode}>
            zurück
          </button>
        )}

        <button type="submit">speichern</button>
      </div>
    </StyledForm>
  );
}

const NewProfileForm = styled(StyledForm)``;

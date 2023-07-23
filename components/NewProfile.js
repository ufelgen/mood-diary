import { StyledForm } from "../components/Styles";

export default function NewProfile() {
  function inputUserData(event) {
    event.preventDefault();
    const newProfile = {
      firstName: event.target.elements.firstName.value,
      lastName: event.target.elements.lastName.value,
      gender: event.target.elements.gender.value,
      birthday: event.target.elements.birthday.value,
    };

    console.log(newProfile);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={(event) => inputUserData(event)}>
      <label htmlFor="firstName">Vorname: </label>
      <input id="firstName" name="firstName" required />
      <label htmlFor="lastName">Nachname: </label>
      <input id="lastName" name="lastName" required />
      <label htmlFor="gender">Geschlecht: </label>
      <select id="gender" name="gender" required>
        <option value="" disabled>
          bitte wählen
        </option>
        <option value="female">weiblich</option>
        <option value="male">männlich</option>
        <option value="diverse">divers</option>
        <option value="notSpecified">keine Angabe</option>
      </select>
      <label htmlFor="birthday" required>
        Geburtstag:{" "}
      </label>
      <input type="date" id="birthday" name="birthday" />
      <button type="submit">speichern</button>
    </StyledForm>
  );
}

import styled from "styled-components";

export default function UserProfile({
  userProfile,
  toggleEditMode,
  deleteProfile,
}) {
  if (!userProfile) {
    return null;
  }

  function getUserGender() {
    if (userProfile.gender === "female") {
      const gender = "w";
      return gender;
    } else if (userProfile.gender === "male") {
      const gender = "m";
      return gender;
    } else if (userProfile.gender === "diverse") {
      const gender = "div";
      return gender;
    } else {
      return;
    }
  }
  const userGender = getUserGender();

  return (
    <>
      <p>
        <b>Name:</b> {userProfile.firstName} {userProfile.lastName} (
        {userGender})
      </p>
      <p>
        <b>Geburtstag: </b>
        {userProfile.birthday}
      </p>
      <button onClick={(event) => deleteProfile(event, userProfile.id)}>
        Profil löschen
      </button>
      <button onClick={toggleEditMode}>Profil bearbeiten</button>
    </>
  );
}

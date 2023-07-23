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
    <ButtonContainer>
      <p>
        <b>Name:</b> {userProfile.firstName} {userProfile.lastName} (
        {userGender})
      </p>
      <p>
        <b>Geburtstag: </b>
        {userProfile.birthday}
      </p>
      <div>
        <button onClick={(event) => deleteProfile(event, userProfile.id)}>
          Profil löschen
        </button>
        <button onClick={toggleEditMode}>Profil bearbeiten</button>
      </div>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  padding: 1rem;
  text-align: center;

  p {
    padding: 1rem;
  }
  button {
    padding: 0.3rem;
    margin: 1rem -0.5rem 0 0.7rem;
    //margin-left: 0.7rem;
    //margin-right: -0.5rem;
    background-color: hotpink;
    color: white;
    border: none;
    border-radius: 3px;
  }
`;

import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewProfile from "../components/NewProfile";
import UserProfile from "../components/UserProfile";
import { StyledMain } from "../components/Styles";
import { fetchProfileData } from "../helpers/fetchData";
import { useSession } from "next-auth/react";

export default function Profile({
  profile,
  onProfile,
  editing,
  toggleEditMode,
}) {
  if (!profile) {
    return null;
  }

  const { data: session } = useSession();

  const userProfile = profile?.find(
    (profile) => profile.user === session?.user.email
  );

  async function saveNewProfile(newProfile) {
    await fetch("/api/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfile),
    });
    async function performFetch() {
      const profileFromDatabase = await fetchProfileData();
      onProfile(profileFromDatabase);
    }
    performFetch();
  }

  async function handleUpdateProfile(updatedProfile, id) {
    await fetch("/api/profiles/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    });
    async function performFetch() {
      const profileFromDatabase = await fetchProfileData();
      onProfile(profileFromDatabase);
    }
    performFetch();
  }

  async function deleteProfile(event, id) {
    event.preventDefault();

    const confirmation = confirm("Möchtest du dein Profil wirklich löschen?");
    if (confirmation) {
      await fetch("/api/profiles/" + id, {
        method: "DELETE",
      });
      async function performFetch() {
        const profileFromDatabase = await fetchProfileData();
        onProfile(profileFromDatabase);
      }
      performFetch();
    }
  }

  return (
    <>
      <Header />
      <StyledMain>
        {session ? (
          <StyledProfilePage>
            {userProfile?.firstName ? (
              <>
                {editing ? (
                  <NewProfile
                    userProfile={userProfile}
                    toggleEditMode={toggleEditMode}
                    editing={editing}
                    onUpdateProfile={handleUpdateProfile}
                  />
                ) : (
                  <UserProfile
                    userProfile={userProfile}
                    toggleEditMode={toggleEditMode}
                    deleteProfile={deleteProfile}
                  />
                )}
              </>
            ) : (
              <NewProfile saveNewProfile={saveNewProfile} />
            )}
          </StyledProfilePage>
        ) : (
          <p>Bitte logge dich ein.</p>
        )}
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledProfilePage = styled.article`
  position: fixed;
  height: auto;
  top: 20vh;
  width: 80vw;
  left: 10vw;
  background-color: lightgrey;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
`;

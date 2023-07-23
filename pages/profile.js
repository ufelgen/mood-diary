import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewProfile from "../components/NewProfile";
import { StyledMain } from "../components/Styles";
import { fetchProfileData } from "../helpers/fetchData";

export default function Profile({ profile = {}, onProfile }) {
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

  return (
    <>
      <Header />
      <StyledMain>
        {profile.firstName ? (
          <>
            <p>{profile.firstName}</p>
          </>
        ) : (
          <NewProfile saveNewProfile={saveNewProfile} />
        )}
      </StyledMain>
      <Footer />
    </>
  );
}

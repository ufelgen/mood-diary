import styled from "styled-components";
import Image from "next/image";
import { useFetch } from "../helpers/useFetch";

export default function RandomImageFetch({ setImage }) {
  const image = useFetch(
    "https://api.unsplash.com/photos/random/?client_id=WKBB_hRTpI7rLsirREapzkzb5LnFcgG1uPiZBv1qBQ0"
  );

  return (
    <StyledImagePage>
      <Image
        src="https://source.unsplash.com/random/500x500?animal"
        alt="cute animal"
        width={300}
        height={300}
        priority
      />
      <button onClick={() => setImage(false)}>back</button>
    </StyledImagePage>
  );
}

const StyledImagePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    background-color: hotpink;
    color: white;
    padding: 2rem;
    border: 1px solid darkmagenta;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    width: 50%;
  }
`;

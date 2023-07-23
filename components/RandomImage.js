import Image from "next/image";
import dynamic from "next/dynamic";

export default function RandomImage({ randomImage }) {
  function getRandomNumber() {
    // adjust number according to number of images in collection
    return Math.floor(Math.random() * 405);
  }

  const url =
    "https://source.unsplash.com/collection/2022043/" + getRandomNumber();
  // adjust collection number

  const { height, width } = dynamic(() => import("../helpers/useWindowSize"), {
    ssr: false,
  });

  return (
    <Image
      src={url}
      alt="awesome picture"
      fill
      height={height}
      width={width}
      objectFit="cover"
      priority
    />
  );
}

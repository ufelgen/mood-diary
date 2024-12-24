import Image from "next/image";
import dynamic from "next/dynamic";
import RandomImageFetch from "./RandomImageFetch";

export default function RandomImage() {
  const imageData = RandomImageFetch();
  const url = imageData?.urls?.regular;

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

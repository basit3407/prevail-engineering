import Images from "../components/Gallery/Images";
import Top from "../components/Gallery/Top";

const imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Gallery() {
  return (
    <>
      <Top />
      <Images array={imageArray} />
    </>
  );
}

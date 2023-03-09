import Image from "next/image";
import upload from "../../images/upload.jpg";

function MealImage({
  imageAddress,
  width,
  height,
}: {
  imageAddress: string;
  width?: number;
  height?: number;
}) {
  return (
    <>
      <Image
        width={width || 200}
        height={height || 250}
        priority
        style={{ objectFit: "cover", borderRadius: ".5rem" }}
        src={imageAddress ? imageAddress : upload}
        alt="mealsImage"
        placeholder="blur" // 추가
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" //추가
      />
    </>
  );
}

export default MealImage;

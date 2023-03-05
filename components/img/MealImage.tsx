import Image from "next/image";
import styles from "./MealImage.module.css";
import upload from "../../images/upload.jpg";

function MealImage({ imageAddress }: { imageAddress: string }) {
  return (
    <div className={styles.container}>
      <Image
        fill
        src={imageAddress ? imageAddress : upload}
        className={styles.customImage}
        alt="mealsImage"
        placeholder="blur" // 추가
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" //추가
      />
    </div>
  );
}

export default MealImage;

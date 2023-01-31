import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import Light from "../../images/light.svg";
import Dark from "../../images/dark.svg";

function ThemeModeButton() {
  const { theme, setTheme } = useTheme();
  const [colorMode, setColorMode] = useState(false);

  const handleOnLightClick = () => {
    setTheme("light");
    setColorMode(!colorMode);
  };

  const handleOnDarkClick = () => {
    setTheme("dark");
    setColorMode(!colorMode);
  };

  return (
    <>
      {colorMode ? (
        <>
          <button onClick={handleOnLightClick}>
            <Image src={Light} alt="Light" width={24} />
          </button>
        </>
      ) : (
        <>
          <button onClick={handleOnDarkClick}>
            <Image src={Dark} alt="Dark" width={24} />
          </button>
        </>
      )}
    </>
  );
}

export default ThemeModeButton;

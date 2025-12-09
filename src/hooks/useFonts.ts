import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "OpenDyslexic-Regular": require("../../assets/fonts/OpenDyslexic-Regular.otf"),
        "OpenDyslexic-Bold": require("../../assets/fonts/OpenDyslexic-Bold.otf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  return fontsLoaded;
}

import React from 'react'
import { useFonts } from 'expo-font'
export default function CustomFonts() {
    const [loaded] = useFonts({
        Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
        Satisfy: require('../assets/fonts/Satisfy-Regular.ttf'),
        Mochiy: require('../assets/fonts/MochiyPopPOne-Regular.ttf'),
        Pacifico: require('../assets/fonts/Pacifico-Regular.ttf'),
        Oswald: require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
        Squada: require('../assets/fonts/SquadaOne-Regular.ttf'),
      });
     
      if (!loaded) {
        return null;
        }

};

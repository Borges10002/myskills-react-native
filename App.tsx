import React, { useEffect } from "react";

import SplashScreen from "react-native-splash-screen";

import { StatusBar } from "react-native";
import { Home } from "./src/pages/Home";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}

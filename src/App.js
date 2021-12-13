import AppRouter from "@components/AppRouter/index.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { setLightTheme, setDarkTheme } from "@utils/themeUtil";

const App = () => {
  useEffect(() => {
    if (localStorage.getItem("data-theme") === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, []);
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;

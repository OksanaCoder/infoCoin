import { useEffect } from "react";
import AppRouter from "@components/AppRouter/index.js";
import { getDataTheme, setDataTheme } from "@utils/themeUtil";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  
  useEffect(() => {
    const dataTheme = getDataTheme();
    setDataTheme(dataTheme);
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;

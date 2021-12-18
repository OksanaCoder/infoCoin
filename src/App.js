import AppRouter from "@components/AppRouter/index.js";
import { setThemeInBrowser } from "@utils/themeUtil";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";

const App = () => {

  useEffect(() => {
    setThemeInBrowser(localStorage.getItem('data-theme') ?? 'light')
  }, [])

  return <AppRouter />;
};

export default App;

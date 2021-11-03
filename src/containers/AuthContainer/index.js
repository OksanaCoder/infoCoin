import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RegisterPage from "@pages/RegisterPage";
import LoginPage from "@pages/LoginPage";
import logo from "@assets/icons/logo.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AuthContainer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="flex-col-center my-4">
        <img src={logo} alt="logo" style={{margin: 'auto'}} width="50px" />
        <h1 className="logo text-center">INFOCOIN</h1>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Зарегестрироваться" />
          <Tab label="Войти" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className="text-center">
        <RegisterPage />
      </TabPanel>
      <TabPanel value={value} index={1} className="text-center">
        <LoginPage />
      </TabPanel>
    </>
  );
};

export default AuthContainer;

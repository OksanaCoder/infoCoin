/* eslint-disable react/jsx-no-target-blank */
// import React, {useState} from "react";
import React from "react";
// import {Link, useHistory} from "react-router-dom";
import { Button } from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Input from "@components/Form/Input";
import SignupSchema from "@helpers/Formik/validation";
import Formik from "@helpers/Formik";
import { connect } from 'react-redux'
import { signUpAPI, getUsers } from "@services/api/auth";
import { authSignUp } from "@redux/actions/auth";
// import PrivacyPopup from "@containers/PrivacyPopup/PrivacyPopup";
import 'react-notifications/lib/notifications.css';
import { useHistory } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';


const RegisterPage = ({
  isLoadingAuth,
  registerAction
}) => {


  const createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Вы успешно зарегистрировались !');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Что-то пошло не так', 5000, () => {
            alert('callback');
          });
          break;
        default: console.log('d');
         
      };
    };
  };

  let history = useHistory();

  const registerUser = (values) => {
    return signUpAPI(values)
    .then(() => createNotification('success'))
    .then(registerAction)
    // .then(getUsers)

    .then(() => {
      history.push("/");
    })
  };
//   <button
//   onClick={createNotification('success')}>Success
// </button>
  return (
    <React.Fragment>

      {/* {isPrivacyOpened && (
                <PrivacyPopup togglePrivacyPolicy={() => setPrivacyOpened((p) => !p)}/>
            )} */}
      <div>
        <div>
       

              <NotificationContainer/>
          <Formik
            initialValues={{
              email: "",
              password: "",
              nickname: "",
              phone: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              registerUser(values).catch((error) => {
                console.log(JSON.stringify(error));
                actions.setErrors({
                  email: " ",
                  password: " ",
                  nickname: " ",
                  phone: " ",
                });
                // if (error?.notification) {
                //     addNotificationAction({type: "error", text: error.message});
                //     return
                // }
                // console.log(error)
              });
            }}
          >
            {({
              setFieldTouched,
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
              setValues,
            }) => (
              <form onSubmit={handleSubmit}>
                <div>
                
                  <Input
                    placeholder="User"
                    label="Имя"
                    variant="outlined"
                    type="nickname"
                    name="nickname"
                    error={errors.nickname && touched.nickname}
                    errorText={touched.nickname && errors.nickname}
                    onBlur={() => setFieldTouched("nickname", true, false)}
                    value={values.nickname}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    placeholder="example.mail@gmail.com"
                    label="Почта"
                    variant="outlined"
                    type="email"
                    name="email"
                    error={errors.email && touched.email}
                    errorText={touched.email && errors.email}
                    onBlur={() => setFieldTouched("email", true, false)}
                    value={values.email}
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="+380934343444"
                    label="Номер телефона"
                    variant="outlined"
                    type="phone"
                    name="phone"
                    error={errors.phone && touched.phone}
                    errorText={touched.phone && errors.phone}
                    onBlur={() => setFieldTouched("phone", true, false)}
                    value={values.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    placeholder="123456789"
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    name="password"
                    error={errors.password && touched.password}
                    errorText={touched.password && errors.password}
                    onBlur={() => setFieldTouched("password", true, false)}
                    value={values.password}
                    onChange={handleChange}
                  />
                  {/* <Input
                      placeholder="123456789"
                      label="confirm password"
                      variant="outlined"
                      type="password"
                      name="confirmPassword"
                      error={errors.confirmPassword && touched.confirmPassword}
                      errorText={
                          touched.confirmPassword && errors.confirmPassword
                      }
                      onBlur={() =>
                          setFieldTouched("confirmPassword", true, false)
                      }
                      value={values.confirmPassword}
                      onChange={handleChange}
                  /> */}
                </div>
                <div
                  className="form-group form-check"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FormControlLabel
                    name="acceptTerms"
                    onChange={(e) => {
                      setValues({
                        ...values,
                        acceptTerms: e.target.checked,
                      });
                    }}
                    className="my-4 text-left"
                    control={<Checkbox className="me-2" />}
                    label=" Я принимаю условия пользования и конфиденциальности"
                  />
                </div>
                {/* {!checkboxValue ? (<span style={{ display: 'flex', color: 'red', justifyContent: 'center', fontSize: '14px'}}>Accept terms of use</span>) : null} */}
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className="btn-prime"
                  // disabled={isSubmitting || isLoadingAuth}
                >
                  Зарегестрироваться
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
};


const mapStateToProps = (state) => {
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (data) => dispatch(authSignUp(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);


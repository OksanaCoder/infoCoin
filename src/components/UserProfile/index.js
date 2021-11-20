/* eslint-disable react/jsx-no-target-blank */
// import React, { useState } from 'react';
import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { Button } from '@material-ui/core';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Input from '@components/Form/Input';
import SignupSchema from '@helpers/Formik/validation';
import Formik from '@helpers/Formik';
import '@styles/components/UserProfile.css';

// import PrivacyPopup from "@containers/PrivacyPopup/PrivacyPopup";

const UserProfile = ({
  isLoadingAuth,
  registerAction,
  pendingAction,
  addNotificationAction,
}) => {
  return (
    <React.Fragment>
      {/* {isPrivacyOpened && (
                <PrivacyPopup togglePrivacyPolicy={() => setPrivacyOpened((p) => !p)}/>
            )} */}
      <div className="m-mob">
        <div>
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              firstName: '',
              lastName: '',
              phone: '',
            }}
            validationSchema={SignupSchema}
            // onSubmit={(values, actions) => {
            //     handleSubmit2(values).catch((error) => {
            //         console.log(JSON.stringify(error));
            //         actions.setErrors({
            //             email: " ",
            //             password: " ",
            //             confirmPassword: " ",
            //             firstName: " ",
            //             lastName: " ",
            //             phone: " ",
            //         });
            //         if (error?.notification) {
            //             addNotificationAction({type: "error", text: error.message});
            //             return
            //         }
            //         console.log(error)
            //     });
            // }}
          >
            {({
              setFieldTouched,
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form>
                <div>
                  <Input
                    placeholder="User"
                    label="Имя"
                    variant="outlined"
                    type="name"
                    name="name"
                    error={errors.name && touched.name}
                    errorText={touched.name && errors.name}
                    onBlur={() => setFieldTouched('name', true, false)}
                    value={values.name}
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
                    onBlur={() => setFieldTouched('email', true, false)}
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
                    onBlur={() => setFieldTouched('phone', true, false)}
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
                    onBlur={() => setFieldTouched('password', true, false)}
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>

                <button className="delete">Удалить аккаунт</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;

import React from 'react';
import Input from '@components/Form/Input';
import Formik from '@helpers/Formik';
import { LoginSchema } from '@helpers/Formik/validation';
// import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { loginAPI } from '@services/api/auth';

const LoginPage = ({
  isLoadingAuth,
  loginAction,
  pendingAction,
  addNotificationAction,
}) => {

  const loginUser = (values) => {
    return loginAPI(values);
  };
 
  return (
    <div>
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => {
            loginUser(values).catch(error => {
              console.log(JSON.stringify(error));
              actions.setErrors({
                email: ' ',
                password: ' ',
              });
              // if (error?.notification) {
              //     addNotificationAction({type: 'error', text: error.message});
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
              <Input
                placeholder="email"
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                error={errors.email && touched.email}
                errorText={errors.email && touched.email && errors.email}
                value={values.email}
                onChange={handleChange}
                shrink="false"
              />
              <Input
                placeholder="**********"
                label="Пароль"
                type="password"
                name="password"
                variant="outlined"
                error={errors.password && touched.password}
                errorText={
                  errors.password && touched.password && errors.password
                }
                value={values.password}
                onChange={handleChange}
              />
              <div>
                {/* <Link to="/forgot">Forgot password ?</Link> */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting || isLoadingAuth}
                  className="btn-prime my-3"
                >
                  Войти
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;

import React from 'react';
import Input from '@components/Form/Input';
import Formik from '@helpers/Formik';
import { LoginSchema } from '@helpers/Formik/validation';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { loginAPI } from '@services/api/auth';
import { authLogin } from '@redux/actions/auth'
import {compose} from 'redux';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import { createNotification } from 'App';

const LoginPage = ({
  isLoadingAuth,
  loginAction
}) => {

  let history = useHistory();
  const loginUser = (values) => {
    return loginAPI(values)
    .then((response)=> {
      if (response.data?.token) {
        loginAction(response.data)
      }
    })
    .then(() => createNotification('success-login'))
    // .then(getUsers)

     .then(() => {
       history.push("/");
     })
    .catch((error) => {
      createNotification('error')
    })
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


const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (data) => dispatch(authLogin(data))
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);



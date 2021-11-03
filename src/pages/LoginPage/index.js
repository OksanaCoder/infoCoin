import React from 'react'
import Input from '@components/Form/Input';
import Formik from '@helpers/Formik';
import {LoginSchema} from '@helpers/Formik/validation';
import { Link } from 'react-router-dom'; 
import { Button } from '@material-ui/core'



const LoginPage = ({isLoadingAuth, loginAction, pendingAction, addNotificationAction}) => {
 
    return (

        <div>
            <div>
              
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={LoginSchema}
                    // onSubmit={(values, actions) => {
                    //     handleSubmit1(values).catch((error) => {
                    //         console.log(JSON.stringify(error));
                    //         actions.setErrors({
                    //             email: " ",
                    //             password: " ",

                    //         });
                    //         if (error?.notification) {
                    //             addNotificationAction({type: 'error', text: error.message});
                    //             return
                    //         }
                    //         console.log(error)
                    //     });
                    // }}
                >
                    {({values, errors, touched, handleChange, handleSubmit, isSubmitting}) => (
                        <form>
                            <Input
                
                                label='email'
                                type="email"
                                name="email"
                                variant="outlined"
                                error={errors.email && touched.email}
                                errorText={errors.email && touched.email && errors.email}
                                value={values.email}
                                onChange={handleChange}
                            />
                            <Input
                               
                                label='password'
                                type="password"
                                name="password"
                                variant="outlined"
                                error={errors.password && touched.password}
                                errorText={errors.password && touched.password && errors.password}
                                value={values.password}
                                onChange={handleChange}
                            />
                            <div>
                                 {/* <Link to="/forgot">Forgot password ?</Link> */}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                    className='btn-primary'
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
}


export default  LoginPage
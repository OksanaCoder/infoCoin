import * as Yup from 'yup';



const SignupSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .email('invalid email')
      .required('required'),
    password: Yup.string()
      .min(8, 'min', { num: 8 })
      .max(100, 'max', {  num: 100 })
      .required('required'),
    // confirmPassword: Yup.string()
    //   .min(8, 'min', { num: 8 })
    //   .max(100, 'max', {  num: 100 })
    //   .oneOf([Yup.ref('password'), null], 'password do not match')
    //   .required('required'),
    nickname: Yup.string()
      .min(1, 'min', { num: 1 })
      .max(16, 'max', {  num: 16 })
      .required('required'),
    phone: Yup.string()
      .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, {message: 'phone number is not valid', excludeEmptyString: false})
      .required('required'),     
      // phone: Yup.number()
 
    acceptTerms: Yup.bool()
    .oneOf([true], 'Accept Terms & Conditions is required')
    .required('required'),   
  });
 
export const LoginSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .email('invalid email')
      .required('required'),
    password: Yup.string().required('required'),
  });

export const ForgotPasswordSchema = () =>
  Yup.object().shape({
    email: Yup.string()
     .email('invalid email')
     .required('required'),
  });

export const ResetPasswordSchema = () =>
  Yup.object().shape({
    password: Yup.string()
      .min(5, 'min', { num: 5 })
      .max(100, 'max', { num: 100 })
      .required('required'),
    confirmPassword: Yup.string()
      .min(5, 'min', { num: 5 })
      .max(100, 'max', { num: 100 })
      .oneOf([Yup.ref('password'), null], 'password do not match')
      .required('required'),
  });


export const CurrentUserPassRecoverySchema = () =>
  Yup.object().shape({
    password: Yup.string()
      .min(5, 'min', { num: 5 })
      .max(100,  'max', { num: 100 })
      .required('required'),
    confirmPassword: Yup.string()
      .min(5, 'min', { num: 5 })
      .oneOf([Yup.ref('password'), null], 'password do not match')
      .required('required'),
  });


export default SignupSchema;

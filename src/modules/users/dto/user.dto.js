import * as Yup from 'yup';
import validateMiddlware from '../middlewares/validate.middleware';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required!')
    .email(),
  password: Yup.string()
    .required('Password is required!')
    .min(5, 'Password should contain 5 ch')
});

export default validateMiddlware(validationSchema);
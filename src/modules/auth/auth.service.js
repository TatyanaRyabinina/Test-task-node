import jwt from 'jwt';
import config from '../../config';
import User from '../../models/User';
import { InvalidCredentialsError } from './auth.constants';

export const authenticate = async ({ email, password }) => {
  const user = (await User.findOne({ email })) || {};
  if(user && user.password === password) {
    const token = jwt.sign(user, config.jwt.secret);
    return { 
      user,
      token,
    };
  } 
  throw new Error(InvalidCredentialsError);
};
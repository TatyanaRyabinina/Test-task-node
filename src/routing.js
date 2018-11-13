import Router from 'koa-router';
import jwt from 'koa-jwt';
import config from './config';
import configureRegistrationController from './modules/users/registration.controller'; 
import configureAuthController from './modules/auth/auth.controller';
import configureUsersController from './modules/users/users.controller';

export const configurePublic = () => {
  const publicRouter = new Router();
  publicRouter.use(configureRegistrationController());
  publicRouter.use(configureAuthController());  
  return publicRouter.routes();
};

export const configurePrivate = () => {
  const privateRouter = new Router();
  privateRouter.use(jwt(config.secret));
  privateRouter.use(configureUsersController());
  return privateRouter.routes();
};
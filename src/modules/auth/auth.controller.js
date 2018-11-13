import Router from 'koa-router';
import * as AuthService from './auth.service';

const authentication = async (ctx) => {
  const { body } = ctx.request;
  const data = await AuthService.authenticate(body);
  ctx.body = { data };
};

export default () => {
  const authRouter = new Router();
  authRouter.post('/authentication', authentication);
};

import Router from 'koa-router';
import UserService from './users.service';
import userDto from './dto/user.dto';

const registerUser = async (ctx) => {
  const userData = ctx.request.body;
  const data = await UserService.createUser(userData);
  ctx.body = { data };
};

export default () => {
  const userController = new Router();
  userController.post('/register', userDto, registerUser);
  return userController.routes();
};
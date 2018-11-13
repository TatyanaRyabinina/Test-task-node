import Router from 'koa-router';
import UserService from './users.service';
import userDto from './dto/user.dto';

const createUser = async ctx => {
  const { body } = ctx.request;
  const createdUser = await UserService.createUser(body);
  ctx.body = {
    data: createdUser
  };
};

const getAllUsers = async ctx => {
  const allUsers = await UserService.getAllUsers();
  ctx.body = {
    data: allUsers
  };
};

const deleteUser = async ctx => {
  const { id } = ctx.params;
  const deletedUser = await UserService.deleteUser(id);
  ctx.body = {
    data: deletedUser
  };
};

const getUser = async ctx => {
  const { id } = ctx.params;
  const User = await UserService.getUserById(id);
  ctx.body = {
    data: User
  };
};


const updateUser = async (ctx) => {
  const userData = ctx.request.body;
  const data = await UserService.updateUser(userData);
  ctx.body = { data };
};

export default () => {
  const userController = new Router();
  userController.get('/user/:id', getUser);
  userController.get('/users', getAllUsers);
  userController.put('/user', updateUser);
  userController.delete('/user/:id', deleteUser);
  userController.post('/user', userDto, createUser);
  return userController.routes();
};
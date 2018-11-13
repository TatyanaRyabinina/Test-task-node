import User from '../models/User';

const createUser = async (data) => {
  return await User.create(data);
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const deleteUser = async (id) => {
  return await User.findByIdAndRemove(id);
};

const getAllUsers = async () => {
  return await User.find();
};

const updateUser = async (body) => {
  return await User.findOneAndUpdate({ _id: body._id }, body);
};

export default {
  createUser,
  getUserById,
  deleteUser,
  getAllUsers,
  updateUser
};
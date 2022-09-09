import bcrypt from 'bcrypt';
import { database } from '@libs';
import { CustomError } from '@helpers';

export const create = async (user) => {
  try {
    const newId = database.users.length + 1;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = { id: newId, ...user, password: hashedPassword };
    database.users.push(newUser);
    const { password, ...response } = newUser;
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAll = () => {
  try {
    const dbUsers = database.users;
    const response = dbUsers.map((item) => {
      const { password, ...user } = item;
      return user;
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getById = (id: number) => {
  try {
    const userFound = database.users.find((item) => item.id === id);
    if (!userFound) {
      throw new CustomError(404, 'User not found', 'Not Found');
    }
    let { password, ...response } = userFound;
    return response;
  } catch (error) {
    throw error;
  }
};

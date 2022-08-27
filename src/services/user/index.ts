import bcrypt from 'bcrypt';
import { database } from '@libs';

export const create = async (user) => {
  try {
    const newId = database.users.length + 1;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = { id: newId, ...user, password: hashedPassword };
    database.users.push(newUser);
    const { password, ...response } = newUser;
    return response;
  } catch (error) {
    return error;
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
    return error;
  }
};

export const getById = (id: number) => {
  try {
    const userFound = database.users.find((item) => item.id === id);
    if (!userFound) {
      new Error('not found');
    }
    const { password, ...user } = userFound;
    const response = user;
    return response;
  } catch (error) {
    return error;
  }
};

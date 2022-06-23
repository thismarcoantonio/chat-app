import { User } from "../declarations/User";

const users: User[] = [];

const UserController = {
  users,
  create(user: User) {
    return users.push(user);
  },
  findById(id: User["id"]) {
    return users.find((user) => user.id === id);
  },
};

export { UserController };

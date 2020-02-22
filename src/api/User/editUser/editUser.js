import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";
export default {
  Mutation: {
    editUser: async (_, args, { request }) => {
      isAuthenticated(request);
      const {
        id,
        avatar,
        userName,
        birthday,
        phoneNum,
        password,
        introduce,
        action
      } = args;
      const { user } = request;
      console.log(args);
      if (user) {
        if (action === "EDIT") {
          return await prisma.updateUser({
            where: {
              id: user.id
            },
            data: {
              avatar,
              userName,
              birthday,
              phoneNum,
              password,
              introduce
            }
          });
        } else if (action === "DELETE") {
          return await prisma.deleteUser({ id });
        }
      }
    }
  }
};

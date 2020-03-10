import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    avatarEdit: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { avatar } = args;
      const update = await prisma.updateUser({
        data: {
          avatar
        },
        where: {
          id: user.id
        }
      });
      console.log(update);
      if (update) {
        return user;
      }
    }
  }
};

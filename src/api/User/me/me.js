import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    me: async (_, __, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      console.log(user);
      return await prisma.user({ id: user.id });
    }
  }
};

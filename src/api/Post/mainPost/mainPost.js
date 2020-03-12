import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    mainPost: async (_, __, { request }) => {
      isAuthenticated(request);

      const post = await prisma.posts({
        where: {
          main: true
        }
      });
      return post[0];
    }
  }
};

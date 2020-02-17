import { prisma } from "../../../../originals-demo/generated/prisma-client";
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
      console.log(post[0]);
      return post[0];
    }
  }
};

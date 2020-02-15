import { prisma } from "../../../../originals-demo/generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seeProfileById: async (_, args, { request }) => {
      isAuthenticated(request);
      const { id } = args;

      const user = await prisma.user({ id });

      return user;
    }
  }
};

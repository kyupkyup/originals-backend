import { prisma } from "../../../../originals-demo/generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seePost: async (_, args, { request }) => {
      isAuthenticated(request);
      const { id } = args;

      return await prisma.post({ id });
    }
  }
};

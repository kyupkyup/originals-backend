import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seeProfile: async (_, args, { request }) => {
      isAuthenticated(request);
      const { email } = args;

      const user = await prisma.user({ email });

      return user;
    }
  }
};

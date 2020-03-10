import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seeMeeting: async (_, args, { request }) => {
      isAuthenticated(request);
      const { id } = args;
      const meeting = await prisma.meeting({ id });
      return meeting;
    }
  }
};

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    mainMeeting: async (_, __, { request }) => {
      isAuthenticated(request);

      const meeting = await prisma.meetings({
        where: {
          main: true
        }
      });
      return meeting[0];
    }
  }
};

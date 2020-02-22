import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    showMeetingList: async (_, __, { request }) => {
      isAuthenticated(request);
      return await prisma.meetings({
        orderBy: "createdAt_DESC"
      });
    }
  }
};

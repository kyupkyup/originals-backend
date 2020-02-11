import { prisma } from "../../../../originals-demo/generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    showMeetingList: async (_, __, { request }) => {
      isAuthenticated(request);
      return await prisma.meetings();
    }
  }
};

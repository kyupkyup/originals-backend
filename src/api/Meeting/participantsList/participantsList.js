import { prisma } from "../../../../originals-demo/generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seeParticipantsList: async (_, args, { request }) => {
      isAuthenticated(request);
      const { meetingId } = args;
      console.log(args);
      return await prisma.participants({
        where: {
          meeting: {
            id: meetingId
          }
        },
        orderBy: "createdAt_DESC"
      });
    }
  }
};

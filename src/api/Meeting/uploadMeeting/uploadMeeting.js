import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    uploadMeeting: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const {
        title,
        main,
        meetingTime,
        meetingPlace,
        meetingPrice,
        deadline,
        meetingHeadCounts
      } = args;
      if (main === true) {
        await prisma.updateManyMeetings({
          data: { main: false }
        });
      }
      const meeting = await prisma.createMeeting({
        user: { connect: { id: user.id } },
        title,
        meetingTime,
        main,
        meetingPlace,
        meetingPrice,
        deadline,
        meetingHeadCounts
      });

      return meeting;
    }
  }
};

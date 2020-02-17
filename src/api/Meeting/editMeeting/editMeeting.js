import { prisma } from "../../../../originals-demo/generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    editMeeting: async (_, args, { request }) => {
      isAuthenticated(request);
      const {
        id,
        title,
        main,
        meetingTime,
        meetingPlace,
        meetingPrice,
        deadline,
        meetingHeadCounts,
        action
      } = args;
      const { user } = request;
      const meeting = await prisma.$exists.meeting({
        id,
        user: { id: user.id }
      });

      if (meeting) {
        if (action === "EDIT") {
          if (main === true) {
            await prisma.updateManyMeetings({
              data: { main: false }
            });
          }
          return prisma.updateMeeting({
            data: {
              title,
              main,
              meetingTime,
              meetingPlace,
              meetingPrice,
              deadline,
              meetingHeadCounts
            },
            where: {
              id
            }
          });
        } else if (action === "DELETE") {
          return prisma.deleteMeeting({
            id
          });
        } else {
          throw Error("해당 작업을 수행할 수 없습니다.");
        }
      }
    }
  }
};

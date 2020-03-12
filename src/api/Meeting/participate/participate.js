import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";
export default {
  Mutation: {
    participate: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { meetingId } = args;

      const filterOptions = {
        AND: [
          {
            user: {
              id: user.id
            }
          },
          {
            meeting: {
              id: meetingId
            }
          }
        ]
      };
      try {
        const existingParticipate = await prisma.$exists.participant(
          filterOptions
        );
        if (existingParticipate) {
          await prisma.deleteManyParticipants(filterOptions);
          return true;
        } else {
          await prisma.createParticipant({
            user: { connect: { id: user.id } },
            meeting: { connect: { id: meetingId } }
          });
          return true;
        }
      } catch {
        return false;
      }
    }
  }
};

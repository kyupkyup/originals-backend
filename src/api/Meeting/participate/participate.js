import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";
export default {
  Mutation: {
    participate: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { meetingId } = args;

      const participant = await prisma.createParticipant({
        user: { connect: { id: user.id } },
        meeting: { connect: { id: meetingId } }
      });
      return participant;
    }
  }
};

import { prisma } from "../../../originals-demo/generated/prisma-client";

export default {
  Participant: {
    user: ({ id }) => prisma.participant({ id }).user(),
    meeting: ({ id }) => prisma.participant({ id }).meeting()
  }
};

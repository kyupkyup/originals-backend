import { prisma } from "../../../generated/prisma-client";


export default {
    LikeOnComment: {
      comment: ({ id }) => prisma.like({ id }).comment(),
      user: ({ id }) => prisma.like({ id }).user()
    }
  };
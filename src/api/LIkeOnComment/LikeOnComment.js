import { prisma } from "../../../generated/prisma-client";

export default {
  LikeOnComment: {
    comment: ({ id }) => prisma.LikeOnComment({ id }).comment(),
    user: ({ id }) => prisma.LikeOnComment({ id }).user()
  }
};

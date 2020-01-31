import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../originals-demo/generated/prisma-client";
export default {
  Mutation: {
    addComment: async (_, args, request) => {
      isAuthenticated(request);
      const { user } = request;
      const { postId, text } = args;

      const comment = await prisma.createComment({
        user: { connect: { id: user.id } },
        text,
        post: { connect: { id: postId } },
        isLiked: false
      });
      return comment;
    }
  }
};

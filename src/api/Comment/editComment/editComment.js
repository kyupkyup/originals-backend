import { prisma } from "../../../../originals-demo/generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    editPost: async (_, args, request) => {
      isAuthenticated(request);
      const {
        id,
        text,
        action
      } = args;
      const { user } = request;
      const comment = await prisma.$exists.comment({id, user: { id: user.id }});

      if (comment) {
        if (action === "EDIT") {
          return prisma.updateComment({
            data: { text },
            where: {
              id
            }
          });
        } else if (action === "DELETE") {
          return prisma.deleteComment({
            id
          });
        }
        else{
            throw Error("해당 작업을 수행할 수 없습니다.")
        }
      }
    }
  }
};

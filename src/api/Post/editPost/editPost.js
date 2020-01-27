import { prisma } from "../../../../originals-demo/generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    editPost: async (_, args, request) => {
      isAuthenticated(request);
      const {
        id,
        classifyNum,
        main,
        announcement,
        title,
        caption,
        action
      } = args;
      const { user } = request;
      const post = await prisma.$exists.post({id, user: { id: user.id }});

      if (post) {
        if (action === "EDIT") {
          return prisma.updatePost({
            data: { classifyNum, main, announcement, title, caption },
            where: {
              id
            }
          });
        } else if (action === "DELETE") {
          return prisma.deletePost({
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

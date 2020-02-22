import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    editPost: async (_, args, { request }) => {
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
      console.log(args);
      const { user } = request;
      const post = await prisma.$exists.post({ id, author: { id: user.id } });

      if (post) {
        if (action === "EDIT") {
          if (main === true) {
            await prisma.updateManyPosts({
              data: { main: false }
            });
          }
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
        } else {
          throw Error("해당 작업을 수행할 수 없습니다.");
        }
      }
    }
  }
};

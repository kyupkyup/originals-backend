import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    upload: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { files, classifyNum, main, announcement, title, caption } = args;
      if (main === true) {
        await prisma.updateManyPosts({
          data: { main: false }
        });
      }
      const post = await prisma.createPost({
        author: { connect: { id: user.id } },
        caption,
        classifyNum,
        main,
        announcement,
        title,
        bulletinList: { connect: { id: "ck7bzh4vsa3yh0950i06zxm0m" } }
      });
      console.log(main);
      //   files.forEach(
      //     async file =>
      //       await prisma.createFile({
      //         url: file,
      //         post: {
      //           connect: {
      //             id: post.id
      //           }
      //         }
      //       })
      //   );
      return post;
    }
  }
};

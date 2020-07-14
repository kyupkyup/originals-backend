/**
 * 게시글 쓰기 구현부
 * refactoring : 2020. 7. 14.
 *
 */

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    upload: async (_, args, { request }) => {
      isAuthenticated(request);
      // 권한 획득
      const { user } = request;
      const { classifyNum, main, announcement, title, caption } = args;
      if (main === true) {
        // main 페이지에 보여지게 할 경우
        await prisma.updateManyPosts({
          data: { main: false },
          // 다른 게시글의 main 을 모두 false로 변환
        });
      }
      const post = await prisma.createPost({
        author: { connect: { id: user.id } },
        caption,
        classifyNum,
        main,
        announcement,
        title,
        bulletinList: { connect: { id: "ck70f19wn001r07467vn47v6s" } }, // bulletinList 하드 코딩
      });
      return post;
    },
  },
};

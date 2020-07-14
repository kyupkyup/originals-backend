/*
  메인페이지의 글을 출력하는 서버 코드
  refactoring : 2020. 7. 14.
 */

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    mainPost: async (_, __, { request }) => {
      isAuthenticated(request);
      //권한 획득 :
      const post = await prisma.posts({
        where: {
          main: true, // 게시글 중 main true 체크 된 게시물을 post 객체로 넘겨줌
        },
      });
      return post[0];
    },
  },
};

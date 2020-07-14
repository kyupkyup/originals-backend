/*
  클릭된 각 게시물 출력
  refactoring : 2020. 7. 14. 
*/

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seePost: async (_, args, { request }) => {
      isAuthenticated(request);
      //권한 획득
      const { id } = args;
      // 클릭 id를 받아서 해당 게시물 반환
      return await prisma.post({ id });
    },
  },
};

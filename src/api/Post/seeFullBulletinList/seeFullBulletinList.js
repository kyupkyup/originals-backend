/*
  게시글 목록을 보여주기 위한 전체 리스트 받아오기
  refactoring : 2020. 7. 14.
*/

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seeFullBulletinList: async (_, __, { request }) => {
      isAuthenticated(request);
      // 권한 획득
      return await prisma.bulletinLists();
    },
  },
};

/*
  분류 기준을 통한 게시물 sorting
  refactoring: 2020. 7. 14.
*/

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seePostByClassify: async (_, args, { request }) => {
      isAuthenticated(request);
      // 권한 획득
      const { classifyNum } = args;

      if (classifyNum === "all") {
        // 분류기준 중 classifyNum이 all 인 경우 모든 게시글 반환
        return await prisma.posts({
          orderBy: "createdAt_DESC", // 생성 날짜의 내림차순으로 정렬 = 최신순
        });
      } else {
        return await prisma.posts({
          // 그 외 분류기준은 classifyNum 에 따라 분류 (공지사항, 자유글, 가입인사)
          where: { classifyNum: classifyNum },
          orderBy: "createdAt_DESC",
        });
      }
    },
  },
};

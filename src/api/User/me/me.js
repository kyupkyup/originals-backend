/*
 * 내 자신 객체를 받아와서 프론트 단에서 사용하기 위한 코드
 * refactoring : '20. 7. 12.
 */
import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    me: async (_, __, { request }) => {
      isAuthenticated(request);
      // 로그인되어있는지 확인
      const { user } = request;
      // 로그인되어있다면 user 객체에 저장
      return await prisma.user({ id: user.id });
    },
  },
};

/*
 * 유저의 ID 로 user 객체를 리턴하는 서버 코드
 * refactoring : '20. 7. 12.
 */

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seeProfileById: async (_, args, { request }) => {
      isAuthenticated(request);
      // 로그인 되어있는지 확인 (권한 체크)
      const { id } = args;
      // 찾으려는 유저의 아이디를 프론트에서 받아온다.
      const user = await prisma.user({ id });
      // 해당 아이디로 맞는 유저의 객체 리턴
      return user;
    },
  },
};

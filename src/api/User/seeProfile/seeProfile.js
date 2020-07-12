/*
 * 다른 유저의 계정을 보기 위한 서버 코드
 * refactoring : '20. 7. 12.
 *
 */

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seeProfile: async (_, args, { request }) => {
      isAuthenticated(request);
      // 로그인 되어있는지 확인 (권한 체크)
      const { email } = args;
      // 찾으려는 유저의 이메일을 프론트에서 받아온다.
      const user = await prisma.user({ email });
      // 해당 이메일로 맞는 유저의 객체 리턴
      return user;
    },
  },
};

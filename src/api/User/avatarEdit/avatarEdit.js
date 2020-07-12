/*
 * 프로필 사진 수정
 *  refactoring : 20. 7. 12.
 */

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    avatarEdit: async (_, args, { request }) => {
      isAuthenticated(request);
      // 로그인 되어있는지 확인 (권한 체크)
      const { user } = request;
      // 로그인 되어있다면 그 user객체 가져오기
      const { avatar } = args;
      // 입력한 프로필 사진 url을 parameter로 받아온다.
      const update = await prisma.updateUser({
        data: {
          avatar, // 프로필 사진 url 을 data 객체로 만들어줌
        },
        where: {
          id: user.id, // id 확인해서 맞는 user 프로필 사진 수정
        },
      });
      if (update) {
        //성공했다면
        return user;
      }
    },
  },
};

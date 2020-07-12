/*
  user 계정 내용 수정
  refactoring : 20. 7. 12.
*/

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";
export default {
  Mutation: {
    editUser: async (_, args, { request }) => {
      isAuthenticated(request);
      // 로그인 되어있는지 확인 (권한 체크)
      const {
        id,
        userName,
        birthday,
        phoneNum,
        password,
        introduce,
        action,
      } = args;
      const { user } = request;
      // 권한 확인되면 그 내용을 user에 넣어준다.
      if (user) {
        // 유저 객체가 존재하면
        if (action === "EDIT") {
          // 진행하려는 작업이 수정인지 삭제인지 확인
          return await prisma.updateUser({
            where: {
              id: user.id, // 맞는 유저 아이디를 찾아서
            },
            data: {
              userName,
              birthday,
              phoneNum,
              password,
              introduce,
            }, // 내용 삽입
          });
        } else if (action === "DELETE") {
          // 진행 작업이 계정 삭제라면
          return await prisma.deleteUser({ id });
          // 삭제
        }
      }
    },
  },
};

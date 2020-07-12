/*
 * 유저 로그인
 * email 과 password를 확인해서 등록된 이메일이 아닌지
 * 패스워드가 맞는지 구분해서 다른 출력을 보여줌
 * refactoring : '20. 7. 12.
 */

import { generateToken } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    login: async (_, args) => {
      const { email, password } = args;
      //입력된 parameter를 저장

      const exists = await prisma.$exists.user({ email });
      if (!exists) {
        throw Error("등록된 이메일이 아닙니다.");
      }
      // email로 user가 있는 지 없는지 확인
      // 없는 경우 에러메시지 출력
      const user = await prisma.user({ email });
      // email 이 존재하면 해당 유저 데이터베이스에서 전달받음
      if (user.password === password) {
        // 패스워드가 일치하면
        return generateToken(user.id);
        // jwtwebToken 이용 토큰을 만들어서 프론트(Auth 컴포넌트)로 넘겨줌
        // 자동로그인을 위한 token
        // 프론트엔드의 Auth 컴포넌트, /Apollo/Client.js 참고
      } else {
        throw Error("비밀번호가 틀렸습니다.");
      }
    },
  },
};

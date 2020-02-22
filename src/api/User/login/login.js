import { generateToken } from "../../../utils";
import { prisma } from "../../../../originals-demo/generated/prisma-client";

export default {
  Query: {
    login: async (_, args, { request }) => {
      const { email, password } = args;
      const user = await prisma.user({ email });
      const exists = await prisma.$exists.user({ email });
      console.log(user);
      if (!exists) {
        throw Error("등록된 이메일이 아닙니다.");
      }
      if (user.password === password) {
        return generateToken(user.id);
      } else {
        throw Error("비밀번호가 틀렸습니다.");
      }
    }
  }
};

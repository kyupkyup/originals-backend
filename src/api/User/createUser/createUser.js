import { prisma } from "../../../../generated/prisma-client";
export default {
  Mutation: {
    createUser: async (_, args) => {
      const {
        avatar,
        userName,
        birthday,
        phoneNum,
        email,
        password,
        introduce,
        classes
      } = args;
      const exists = await prisma.$exists.user({ email });
      if (exists) {
        throw Error("이메일이 이미 사용중입니다.");
      }

      const user = await prisma.createUser({
        avatar,
        userName,
        birthday,
        phoneNum,
        email,
        password,
        introduce,
        classes
      });
      if (user) {
        return true;
      } else {
        return false;
      }
    }
  }
};

import { prisma } from "../../../../originals-demo/generated/prisma-client";
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
      try {
        await prisma.createUser({
          avatar,
          userName,
          birthday,
          phoneNum,
          email,
          password,
          introduce,
          classes
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }
};

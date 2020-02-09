import { prisma } from "../../../../originals-demo/generated/prisma-client";

export default {
  Query: {
    seeBulletinList: async (_, args) => {
      const { announcement, classifyNum } = args;

      switch (classifyNum) {
        case 0:
          return prisma.posts({
            where: {
              classifyNum: 0
            },
            orderBy: "createdAt_DESC"
          });
          break;
        case 1:
          return prisma.posts({
            where: {
              classifyNum: 1
            },
            orderBy: "createdAt_DESC"
          });
          break;
        case 2:
          return prisma.posts({
            where: {
              classifyNum: 2
            },
            orderBy: "createdAt_DESC"
          });
          break;

        default:
          return prisma.posts({
            orderBy: "createdAt_DESC"
          });
          break;
      }
    }
  }
};

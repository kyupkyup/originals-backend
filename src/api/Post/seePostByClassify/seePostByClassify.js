import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seePostByClassify: async (_, args, { request }) => {
      isAuthenticated(request);

      const { classifyNum } = args;
      console.log(classifyNum);

      if (classifyNum === "all") {
        return await prisma.posts({
          orderBy: "createdAt_DESC"
        });
      } else {
        return await prisma.posts({
          where: { classifyNum: classifyNum },
          orderBy: "createdAt_DESC"
        });
      }
    }
  }
};

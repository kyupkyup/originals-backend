import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Query: {
    seeFullBulletinList: async (_, __, { request }) => {
      isAuthenticated(request);
      return await prisma.bulletinLists();
    }
  }
};

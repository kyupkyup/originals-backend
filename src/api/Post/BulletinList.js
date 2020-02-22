import { prisma } from "../../../generated/prisma-client";

export default {
  BulletinList: {
    classifyNum: ({ id }) => prisma.bulletinList({ id }).classifyNum(),
    posts: ({ id }) => prisma.bulletinList({ id }).posts()
  }
};

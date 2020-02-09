import { prisma } from "../../../originals-demo/generated/prisma-client";

export default {
  BulletinList: {
    classifyNum: ({ id }) => prisma.bulletinList({ id }).classifyNum(),
    posts: ({ id }) => prisma.bulletinList({ id }).posts()
  }
};

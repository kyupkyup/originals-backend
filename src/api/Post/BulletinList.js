/* BulletinList 객체 정의
 * 전체 게시글을 긁어올 필요가 있어, 선언한 객체
 * refactoring : '20. 7. 12.
 *
 */
import { prisma } from "../../../generated/prisma-client";

export default {
  BulletinList: {
    classifyNum: ({ id }) => prisma.bulletinList({ id }).classifyNum(),
    posts: ({ id }) => prisma.bulletinList({ id }).posts(),
  },
};

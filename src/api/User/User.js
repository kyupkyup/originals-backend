/* User 객체 정의
 * 특히 객체 내 연산이 필요한 count 변수 같은 경우에는
 * 이 서버 코드 내에서 연산을 함.
 * refactoring : '20. 7. 12.
 *
 */
import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    avatar: ({ id }) => prisma.user({ id }).avatar(),
    userName: ({ id }) => prisma.user({ id }).userName(),
    birthday: ({ id }) => prisma.user({ id }).birthday(),
    phoneNum: ({ id }) => prisma.user({ id }).phoneNum(),
    email: ({ id }) => prisma.user({ id }).email(),
    introduce: ({ id }) => prisma.user({ id }).introduce(),
    password: ({ id }) => prisma.user({ id }).password(),
    classes: ({ id }) => prisma.user({ id }).classes(),
    meetings: ({ id }) => prisma.user({ id }).meetings(),
    posts: ({ id }) => prisma.user({ id }).posts(),
    comments: ({ id }) => prisma.user({ id }).comments(),
    likes: ({ id }) => prisma.user({ id }).likes(),
    reservations: ({ id }) => prisma.user({ id }).reservations(),
    participants: ({ id }) => prisma.user({ id }).participants(),
    postsCount: ({ id }) =>
      prisma
        .postsConnection({
          where: {
            author: { id },
          },
        })
        .aggregate()
        .count(),
    commentsCount: ({ id }) =>
      prisma
        .commentsConnection({
          where: {
            user: { id },
          },
        })
        .aggregate()
        .count(),
    likesCount: ({ id }) =>
      prisma
        .likesConnection({
          where: {
            user: { id },
          },
        })
        .aggregate()
        .count(),
    reservationsCount: ({ id }) =>
      prisma
        .reservationsConnection({
          where: {
            user: { id },
          },
        })
        .aggregate()
        .count(),
    participantsCount: ({ id }) =>
      prisma
        .participantsConnection({
          where: {
            user: { id },
          },
        })
        .aggregate()
        .count(),
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    },
  },
};

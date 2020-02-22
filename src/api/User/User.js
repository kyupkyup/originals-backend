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
            author: { id }
          }
        })
        .aggregate()
        .count(),
    commentsCount: ({ id }) =>
      prisma
        .commentsConnection({
          where: {
            user: { id }
          }
        })
        .aggregate()
        .count(),
    likesCount: ({ id }) =>
      prisma
        .likesConnection({
          where: {
            user: { id }
          }
        })
        .aggregate()
        .count(),
    reservationsCount: ({ id }) =>
      prisma
        .reservationsConnection({
          where: {
            user: { id }
          }
        })
        .aggregate()
        .count(),
    participantsCount: ({ id }) =>
      prisma
        .participantsConnection({
          where: {
            user: { id }
          }
        })
        .aggregate()
        .count(),
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    }
  }
};

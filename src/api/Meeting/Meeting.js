import { prisma } from "../../../originals-demo/generated/prisma-client";

export default {
  Meeting: {
    title: ({ id }) => prisma.meeting({ id }).title(),
    user: ({ id }) => prisma.meeting({ id }).user(),
    main: ({ id }) => prisma.meeting({ id }).main(),
    meetingTime: ({ id }) => prisma.meeting({ id }).meetingTime(),
    meetingPlace: ({ id }) => prisma.meeting({ id }).meetingPlace(),
    meetingPrice: ({ id }) => prisma.meeting({ id }).meetingPrice(),
    deadline: ({ id }) => prisma.meeting({ id }).deadline(),
    meetingHeadCounts: ({ id }) => prisma.meeting({ id }).meetingHeadCounts(),
    participants: ({ id }) => prisma.meeting({ id }).participants(),
    isParticipated: (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.participant({
        AND: [
          {
            user: {
              id: user.id
            }
          },
          {
            meeting: {
              id
            }
          }
        ]
      });
    },
    participantsCount: parent =>
      prisma
        .participantsConnection({
          where: { meeting: { id: parent.id } }
        })
        .aggregate()
        .count()
  }
};

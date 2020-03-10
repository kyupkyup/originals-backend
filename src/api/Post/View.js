import { prisma } from "../../../generated/prisma-client";

export default {
  View: {
    user: ({ id }) => prisma.view({ id }).user(),
    post: ({ id }) => prisma.view({ id }).post()
  }
};

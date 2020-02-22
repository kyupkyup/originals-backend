import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    togglePost: async (_, args, { request }) => {
      if (request.user) {
        isAuthenticated(request);
        const { postId } = args;
        const { user } = request;
        const filterOptions = {
          AND: [
            {
              user: {
                id: user.id
              }
            },
            {
              post: {
                id: postId
              }
            }
          ]
        };
        try {
          const existingView = await prisma.$exists.view(filterOptions);
          if (existingView) {
          } else {
            await prisma.createView({
              user: {
                connect: {
                  id: user.id
                }
              },
              post: {
                connect: {
                  id: postId
                }
              }
            });
          }
          return true;
        } catch {
          return false;
        }
      }
    }
  }
};

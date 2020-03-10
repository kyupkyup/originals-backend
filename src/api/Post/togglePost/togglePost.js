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
          console.log(existingView);
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
          console.log("트루");
          return true;
        } catch {
          console.log("펄스");
          return false;
        }
      }
    }
  }
};

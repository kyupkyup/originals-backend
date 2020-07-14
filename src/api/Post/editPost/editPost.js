/*
* post 수정 및 삭제
Action 이 EDIT 일 경우 수정 DELETE 일 경우 삭제
* refactoring : 2020. 7. 14.
*/

import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default {
  Mutation: {
    editPost: async (_, args, { request }) => {
      isAuthenticated(request);
      // 권한 획득
      const {
        id,
        classifyNum,
        main,
        announcement,
        title,
        caption,
        action,
      } = args; // argument 받기
      const { user } = request;
      const post = await prisma.$exists.post({ id, author: { id: user.id } });
      // post 존재하는지 아닌지 확인
      if (post) {
        // 존재할 경우
        if (action === "EDIT") {
          if (main === true) {
            // 만약 main으로 체크되어 값이 넘어왔을 경우
            await prisma.updateManyPosts({
              data: { main: false }, // 나머지 모든 글의 main 을 false로 변경
            });
          }
          return prisma.updatePost({
            // post 업데이트
            data: { classifyNum, main, announcement, title, caption }, // 받아온 값을 id에 맞는 곳에 입력
            where: {
              id,
            },
          });
        } else if (action === "DELETE") {
          // DELETE ACTION의 경우 해당 게시글 삭제
          return prisma.deletePost({
            id,
          });
        } else {
          // post가 존재하지 않을 경우
          throw Error("해당 작업을 수행할 수 없습니다.");
        }
      }
    },
  },
};

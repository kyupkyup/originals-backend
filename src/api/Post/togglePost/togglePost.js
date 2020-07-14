/*
  게시물 클릭 시 조회 수 증가 시키는 함수
  refactoring : 2020. 7. 14.
*/

import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    togglePost: async (_, args, { request }) => {
      isAuthenticated(request);
      // 권한 획득
      if (request.user) {
        // 로그인 되어 있을 시 user 객체 확인
        const { postId } = args;
        const { user } = request;
        const filterOptions = {
          // 한 게시글에 같은 사람이 여러번 조회하더라도 한번의 조회만 되도록 처리
          AND: [
            {
              user: {
                id: user.id, // user id 확인
              },
            },
            {
              post: {
                id: postId, // post id 확인
              },
            },
          ],
        };
        try {
          const existingView = await prisma.$exists.view(filterOptions);
          // 두 조건이 모두 만족할 때 View 가 exist하다고 정의
          if (existingView) {
            // 이미 조회되었을 경우 따로 처리 해주지 않음
          } else {
            await prisma.createView({
              // 조회되지 않았으면 조회수 증가
              user: {
                connect: {
                  id: user.id, // 해당 user의 view객체 연결
                },
              },
              post: {
                connect: {
                  id: postId, // 해당 게시글의 view 객체 연결
                },
              },
            });
          }
          return true;
        } catch {
          return false;
        }
      }
    },
  },
};

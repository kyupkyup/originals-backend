/* View(조회) 객체 정의
 * refactoring : '20. 7. 12.
 *
 */
import { prisma } from "../../../generated/prisma-client";

export default {
  View: {
    user: ({ id }) => prisma.view({ id }).user(),
    post: ({ id }) => prisma.view({ id }).post(),
  },
};

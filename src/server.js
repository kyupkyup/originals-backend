require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middleware";
import { uploadController, uploadMiddleware } from "./upload";
const cors = require("cors");

const PORT = process.env.PORT || 4000; // graphql 서버 선언

const server = new GraphQLServer({
  schema,
  // typeDef, resolvers import
  context: ({ request }) => ({
    request,
    isAuthenticated,
  }),
});
server.express.use(cors());
server.express.use(logger("dev"));
// 개발과정 로그 출력
server.express.use(authenticateJwt);
// json web token(자동로그인) 위한 코드
server.express.post("/api/avatarEdit", uploadMiddleware, uploadController);

server.start(
  {
    port: PORT,
  },
  () =>
    console.log(`server running on port 
  http://localhost:${PORT}`)
);

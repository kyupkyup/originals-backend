require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";

import logger from "morgan";
import schema from "./schema";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middleware";
import { uploadController, uploadMiddleware } from "./upload";
var cors = require("cors");

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({
    request,
    isAuthenticated
  })
});
server.express.use(cors());
server.express.use(logger("dev"));
server.express.use(authenticateJwt);
server.express.post("/api/avatarEdit", uploadMiddleware, uploadController);

server.start(
  {
    port: PORT
  },
  () => console.log(`server running on port http://localhost:${PORT}`)
);

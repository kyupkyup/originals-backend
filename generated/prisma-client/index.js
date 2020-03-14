"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "BulletinList",
    embedded: false
  },
  {
    name: "Like",
    embedded: false
  },
  {
    name: "LikeOnComment",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Meeting",
    embedded: false
  },
  {
    name: "Participant",
    embedded: false
  },
  {
    name: "Book",
    embedded: false
  },
  {
    name: "Reservation",
    embedded: false
  },
  {
    name: "View",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/originals/originals/dev`
});
exports.prisma = new exports.Prisma();

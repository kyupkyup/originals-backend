import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
//api 내 graphql 파일 로드
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));
//api 내 js 파일 로드

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  //graphql query 처리부 (UTF-8 변환)
  resolvers: mergeResolvers(allResolvers),
  // graphql handling 부분
});

export default schema;

import dotenv from "dotenv";
import path from "path";
const result = dotenv.config({ path: "../env" });
if (result.error) {
  throw result.error;
}
console.log(result.parsed);

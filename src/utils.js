import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.resolve(__dirname, ".env"),
});

import jwt from "jsonwebtoken";

export const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);
// 자동로그인을 위한 토큰 생성

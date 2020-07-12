/*
 * createUser resolve 부분
 * 회원가입 시 graphql 에서 받아온 가입 데이터를 데이터베이스에 입력
 * avatar : 프로필 사진
 * userName : 유저이름
 * birthday: 유저 생일
 * phoneNum : 유저 핸드폰 번호
 * email : 유저 이메일 (ID 역할)
 * password : 유저 암호
 * introduce : 자기소개
 * classes : 회원 구분 (정회원, 일반회원, 신입회원)
 *
 *  refactoring : 20. 7. 12.
 */
import { prisma } from "../../../../generated/prisma-client";
export default {
  Mutation: {
    createUser: async (_, args) => {
      const {
        avatar,
        userName,
        birthday,
        phoneNum,
        email,
        password,
        introduce,
        classes,
      } = args;
      const exists = await prisma.$exists.user({ email });
      // 현재 email이 데이터베이스에서 중복되는지 확인
      if (exists) {
        throw Error("이메일이 이미 사용중입니다.");
      }

      const user = await prisma.createUser({
        // 이메일이 중복되지 않는다면 user를 데이터베이스에 입력
        avatar,
        userName,
        birthday,
        phoneNum,
        email,
        password,
        introduce,
        classes,
      });
      if (user) {
        //성공했으면, user 객체가 return 된다면 true 반환
        return true;
      } else {
        return false;
      }
    },
  },
};

import { prisma } from "../../../../originals-demo/generated/prisma-client";
import {isAuthenticated} from "../../../middleware"
export default {
    Mutation:{
        editUser: async(_, args, {request}) => {
            isAuthenticated(request);
            const {
                avatar,
                userName,
                birthday,
                phoneNum,
                password
            } = args;
            const {user} = request;
            return await prisma.updateUser({
                where:{
                    id: user.id
                },
                data:{
                    avatar,
                    userName,
                    birthday,
                    phoneNum,
                    password 
                }
            });

        }
    }
}
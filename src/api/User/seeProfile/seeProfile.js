import { prisma } from "../../../../originals-demo/generated/prisma-client";
import {isAuthenticated} from "../../../middleware"

export default {
    Query:{
        seeProfile: async(_, args, {request}) =>{
            isAuthenticated(request);
            const {id} = args;
            return await prisma.user({id});
        }
    }
}
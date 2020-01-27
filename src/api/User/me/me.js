import { prisma } from "../../../../originals-demo/generated/prisma-client";
import {isAuthenticated} from "../../../middleware"

export default {
    Query:{
        me: async(_, _, {request}) => {
            isAuthenticated(request);
            const {user} = request;
            return await prisma.user({id: user.id});
        }
    }
}
import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation:{
        toggleLike: async(_, args, {request}) =>{
            if(request.user){
                isAuthenticated(request);
                const {commentId} = args;
                const {user} = request;
                const filterOptions = {
                    AND:[
                        {
                            user:{
                                id: user.id
                            }
                        },
                        {
                            comment:{
                                id: commentId
                            }
                        }
                    ]
                };
                try{
                    const existingLike = await prisma.$exists.like(
                            filterOptions  
                    );
                    if(existingLike){
                        await prisma.deleteManyLikes(filterOptions);
                    }
                    else{
                        await prisma.createLike({
                            user: {
                                connect: {
                                    id: user.id
                                }
                            },
                            comment:{
                                connect:{
                                    id: commentId
                                }
                            }
                        });

                    }
                    return true;
                }catch{
                    return false;
                }
            }
        }
    }
};
import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../originals-demo/generated/prisma-client";

export default {
    Mutation:{
        toggleLikeOnComment: async(_, args, {request}) =>{
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
                    const existingLike = await prisma.$exists.likeOnComment(
                            filterOptions  
                    );
                    if(existingLike){
                        await prisma.deleteManyLikeOnComments(filterOptions);
                    }
                    else{
                        await prisma.createLikeOnComment({
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
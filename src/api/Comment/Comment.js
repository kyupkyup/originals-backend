import { prisma } from "../../../originals-demo/generated/prisma-client";

export default {
    Comment:{
        text: ({id}) => prisma.comment({id}).text(),
        user: ({id}) => prisma.comment({id}).user(),
        post: ({id}) => prisma.comment({id}).post(),
        likes: ({id}) => prisma.comment({id}).likes(),
        isLiked: (parent, _, {request}) =>{
            const {user} =request;
            const {id} = parent;
            return prisma.$exists.likeOnComment({
                AND:[
                    {
                        user:{
                            id: user.id
                        }
                    },
                    {
                        comment:{
                            id
                        }
                    }
                ]
            });
        },
        likesCount: parent=> prisma.likeOnCommentsConnection({
            where:{ comment : {id: parent.id}}
        }).aggregate().count(),
    }
}
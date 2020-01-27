import { prisma } from "../../../originals-demo/generated/prisma-client";

export default {
    Post:{
        files: ({ id }) => prisma.post({ id }).files(),
        comments: ({ id }) => prisma.post({ id }).comments(),
        author: ({ id }) => prisma.post({ id }).author(),
        classifyNum:({id}) => prisma.post({id}).classifyNum(),
        main:({id}) => prisma.post({id}).main(),
        announcement:({id}) => prisma.post({id}).announcement(),
        title:({id}) => prisma.post({id}).title(),
        caption:({id}) => prisma.post({id}).caption(),
        views: ({ id }) => prisma.post({ id }).likes(),
        comments: ({ id }) => prisma.post({ id }).likes(),
        likes: ({ id }) => prisma.post({ id }).likes(),
        isLiked: (parent, _, {request}) =>{
            const {user} =request;
            const {id} = parent;
            return prisma.$exists.like({
                AND:[
                    {
                        user:{
                            id: user.id
                        }
                    },
                    {
                        post:{
                            id
                        }
                    }
                ]
            });
        },
        isViewed:(parent, _, {request}) =>{
            const {user} =request;
            const {id} = parent;
            return prisma.$exists.like({
                AND:[
                    {
                        user:{
                            id: user.id
                        }
                    },
                    {
                        post:{
                            id
                        }
                    }
                ]
            });
        },
        likesCount: parent=> prisma.likesConnection({
            where:{ post : {id: parent.id}}
        }).aggregate().count(),
        commentsCount: parent=> prisma.commentsConnection({
            where:{ post : {id: parent.id}}
        }).aggregate().count(),
        viewsCount: parent=> prisma.viewsConnection({
            where:{ post : {id: parent.id}}
        }).aggregate().count(),
    }
};
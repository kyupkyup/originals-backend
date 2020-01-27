import { prisma } from "../../../../originals-demo/generated/prisma-client";

export default {
    User:{
        avatar: ({id}) => prisma.user({id}).avatar(),
        userName: ({id}) => prisma.user({id}).userName(),
        birthday: ({id}) => prisma.user({id}).birthday(),
        phoneNum: ({id}) => prisma.user({id}).phoneNum(),
        email: ({id}) => prisma.user({id}).email(),
        introduce: ({id}) => prisma.user({id}).introduce(),
        password: ({id}) => prisma.user({id}).password(),
        classes: ({id}) => prisma.user({id}).classes(),
        postCount: ({id}) => prisma.postsConnection({
            where:{
                author_some: { id }
            }
        }).aggregate().count()
        ,
        commentsCount:({id}) => prisma.commentsConnection({
            where:{
                user_some: { id }
            }
        }).aggregate().count()
        ,
        likesCount: ({id}) => prisma.likesConnection({
            where:{
                user_some: { id }
            }
        }).aggregate().count()
        ,
        reservationsCount:({id}) => prisma.reservationsConnection({
            where:{
                user_some: { id }
            }
        }).aggregate().count()
        ,
        participantsCount:({id}) => prisma.participantsConnection({
            where:{
                user_some: { id }
            }
        }).aggregate().count()
        ,
        isSelf: (parent, _, { request }) => {
            const { user } = request;
            const { id: parentId } = parent;
            return user.id === parentId;
          }
        

    }
};

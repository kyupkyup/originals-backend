import { prisma } from "../../../../originals-demo/generated/prisma-client";
import {isAuthenticated} from "../../../middleware"

export default {
    Mutation:{
        upload: async(_, args, request) => {
            isAuthenticated(request);
            const {user} = request;
            const {
                files,
                classifyNum,
                main,
                announcement,
                title,
                caption
              } = args;
              const post = await prisma.createPost({
                author: {connect:{id:user.id}}, caption, classifyNum, main, announcement, title, isLiked:false, isViewed:false
              });
              files.forEach(
                async file => await prisma.createFile({
                    url:file,
                    post:{
                        connect:{
                            id: post.id
                        }
                    }
                })
              );
              return post;
        }
    }
}
import { connectDB } from "../../../util/database";
import PostItem from "../components/PostItem";

export default async function Forum() {
    const client = await connectDB;
    const forumDB = client.db("simple-forum-db")
    const postCollection = await forumDB.collection('post').find().toArray() // get all posts

    return ( 
        <div className="forum-container space-y-2 container my-auto flex-col justify-center p-4">
            { 
                postCollection.map((post, idx) =>
                    <PostItem post={processPostData(post)} key={idx} />
                )
            }
        </div> 
    );
}

const processPostData = (post) => {
    return {
        id: post._id.toString(),
        title: post.title,
        content: post.content
    }
}
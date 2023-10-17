import { connectDB } from "../../../util/database";
import Post from "../post/page";

export default async function Forum() {
    const client = await connectDB;
    const forumDB = client.db("simple-forum-db")
    const postCollection = await forumDB.collection('post').find().toArray() // get all posts

    return ( 
        <div>
            { postCollection.map(post =>
                <Post title={post.title} content={post.content} />
                )
            }
        </div> 
    );
}
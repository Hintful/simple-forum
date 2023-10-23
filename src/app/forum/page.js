import Link from "next/link";
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
            <div>
                <Link href={`forum/write`}>
                    <button className="border-2 p-1 text-sm rounded-md hover:bg-gray-200 transition ease-in-out select-none">New Post</button>
                </Link>
            </div>
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
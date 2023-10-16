import { connectDB } from "../../../util/database";

export default async function test() {
    const client = await connectDB;
    const forumDB = client.db("simple-forum-db")
    const postCollection = forumDB.collection('post').find() // get all posts

    await postCollection.forEach(post => {
        console.log(`${post.title} ${post.content}`)
    })

    return ( <div>
        <h4>Test</h4>
    </div> );
}
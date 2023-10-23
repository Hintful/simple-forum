import { connectDB } from "../../util/database";

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const client = await connectDB;
                const forumDB = client.db("simple-forum-db")
                const postCollection = await forumDB.collection('post').find().skip(forumDB.collection('post').count() - 10).toArray() // get 10 recent posts

                res.status(200).json({
                    posts: postCollection
                })
            } catch (err) {
                res.status(500).json({
                    error: 'Failed to fetch posts data'
                })
            }
        default:
            res.status(400).json({
                error: 'getposts method not supported'
            })
    }
}
 
export default handler;
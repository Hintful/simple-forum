import { ObjectId } from "mongodb";
import { connectDB } from "../../../../../util/database";

const PostDetail = async (props) => {
    const postId = props.params.id;

    const client = await connectDB;
    const forumDB = client.db("simple-forum-db")
    const postCollection = await forumDB.collection('post').findOne({ _id: new ObjectId(postId) })

    return ( 
        <div className="container border-2 m-4 p-4 flex-col">
            <div className="font-bold pl-2">
                { postCollection.title }
            </div>
            <div class="w-full border-b m-2" />
            <div className="pl-2">
                { postCollection.content }
            </div>
        </div>
     );
}
 
export default PostDetail;
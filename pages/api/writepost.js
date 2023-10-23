import { connectDB } from "../../util/database";

const handler = async (req, res) => {
    switch (req.method) {
        case 'POST':
            if (req.body == null || req.body.title == null || req.body.content == null || req.body.title == '') {
                return res.status(500).json('Illegal request body')
            }

            try {
                const client = await connectDB;
                const forumDB = client.db("simple-forum-db")
                const result = await forumDB.collection('post').insertOne(req.body)

                res.status(200).redirect('/forum/write/success') // TODO: redirect not functional
                break
            } catch (err) {
                console.log(err)
                res.status(500).json({
                    error: 'Failed to write post'
                })
                break
            }
            
        default:
            res.status(400).json({
                error: 'writepost method not supported'
            })
    }
}
 
export default handler;
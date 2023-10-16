import { MongoClient } from 'mongodb'

let connectDB

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(process.env.DB_URI).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(process.env.DB_URI).connect()
}
export { connectDB }
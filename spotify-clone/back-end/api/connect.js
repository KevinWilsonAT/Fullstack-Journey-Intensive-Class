import { MongoClient } from 'mongodb'

const username = "kevindkcwat";
const db_password = "qfjnM0T6s2sYQiNq";
const URI = `mongodb+srv://${username}:${db_password}@cluster0.ivv6w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);
export const db = client.db("spotify-clone");

//const songCollection = await db.collection('songs').find({}).toArray();
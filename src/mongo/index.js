import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function setupDatabase(params) {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Ping your db successfully");
    return {
      client,
      db: client.db("sample_mflix"),
      collections: {
        users: db.collection("users"),
        movies: db.collection("movies"),
      },
    };
  } catch (error) {
    console.log(error);
    return {};
  }
}

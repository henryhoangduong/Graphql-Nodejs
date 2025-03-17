import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv"
dotenv.config()
const uri = process.env.DATABASE_URL;
console.log(uri)
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(params) {
  try {
    await client.connect();
    await client.db("amin").command({ ping: 1 });
    console.log("Ping your db successfully");
  } catch (error) {
    await client.close();
  }
}
run().catch(console.dir)
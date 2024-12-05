import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://Web_Yatra_Admin:Webyatra-0312@webyatra.gpkb7.mongodb.net/?retryWrites=true&w=majority&appName=WebYatra";
const MONGODB_DB = "WebYatra";
const COLLECTION_NAME = "Playlist_Info";

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB);
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function GET(request) {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection(COLLECTION_NAME);

    const playlist = await collection.find({}).toArray();

    return NextResponse.json(playlist);
  } catch (error) {
    console.error("Error fetching playlist information:", error);
    return NextResponse.json(
      { error: "Failed to fetch playlist information" },
      { status: 500 }
    );
  }
}

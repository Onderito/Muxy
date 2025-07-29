import { NextResponse } from "next/server";
import { moodSchema } from "../../../schema/mood";
import { client } from "@/lib/mongodb";

export async function POST(request: Request) {
  const body = await request.json();
  const parse = moodSchema.safeParse(body);

  if (!parse.success) {
    return NextResponse.json({ message: parse.error.message }, { status: 400 });
  }

  const { name, imageUrl } = parse.data;

  try {
    const db = client.db();
    const collection = db.collection("mood");

    const result = await collection.insertOne({
      name,
      imageUrl,
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: "Erreur serveyr" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const db = client.db();
    const collection = db.collection("mood");

    const findMoods = await collection.find().toArray();
    return NextResponse.json(findMoods);
  } catch (error) {
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}

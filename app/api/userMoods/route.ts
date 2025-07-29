import { NextResponse } from "next/server";
import { userMoodsSchema } from "../../../schema/userMoods";
import { client } from "@/lib/mongodb";

export async function POST(request: Request) {
  const body = await request.json(); // on recupère les données envoyées
  const parse = userMoodsSchema.safeParse(body); // on parse les données pour s'assurer qu'elles sont correctes

  if (!parse.success) {
    return NextResponse.json({ message: parse.error.message }, { status: 400 });
  }

  const { moodId, createdAt, userId } = parse.data;

  try {
    const db = client.db();
    const collection = db.collection("userMoods");

    const result = await collection.insertOne({
      moodId,
      userId,
      createdAt: createdAt || new Date(),
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: "Erreur serveur " }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const db = client.db();
    const collection = db.collection("userMoods");

    const findMoods = await collection.find().toArray(); // afin de tout récupérer et pas un seul.
    return NextResponse.json(findMoods);
  } catch (error) {
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import clientPromise from "../../../src/lib/mongodb";

const client = await clientPromise;
const db = client.db();

export async function GET(request: Request) {
  return NextResponse.json({ message: "Hello from Back-end!" });
}

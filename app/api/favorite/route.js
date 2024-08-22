import { favorites } from "@/assets/data/data"
import { NextResponse } from "next/server"

export async function GET(req, res) {
  return NextResponse.json(favorites)
}

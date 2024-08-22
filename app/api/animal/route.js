import { NextResponse } from "next/server"
import { data } from "../../../assets/data/data"

export async function GET() {
  return NextResponse.json(data)
}

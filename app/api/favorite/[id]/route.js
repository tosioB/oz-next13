import { favorites } from "@/assets/data/data"
import { NextResponse } from "next/server";

export async function POST(req, {params}) {
  const {id} = params
  favorites.push(Number(id))
  return NextResponse.json({id: Number(id)})
}

export async function DELETE(req, {params}) {
  const {id} = params
  const idx = favorites.indexOf(Number(id))
  favorites.splice(idx, 1)
  return NextResponse.json({id: Number(id)})
}
import { data, favorites } from "@/assets/data/data"
import { NextResponse } from "next/server"

export async function GET(req, res) {
  const favoriteAnimals = data.filter(animal => favorites.includes(animal.id))
  return NextResponse.json(favoriteAnimals)
}

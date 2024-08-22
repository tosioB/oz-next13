import { data } from "@/assets/data/data"
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  const {id} = params
  const animal = data.find(animal => animal.id === Number(id));

  if (animal) {
    return NextResponse.json(animal);
  } else {
    return NextResponse.json({error: "no data"});
  }
}
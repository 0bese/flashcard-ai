import { NextResponse } from "next/server";

export async function POST(req) {
  //dummy data

  let flashcards = [
    {
      front: "Closest to the sun. something to make it a bit longer than usual",
      back: "Mercury",
    },
    {
      front: "2nd closest to the sun",
      back: "Venus",
    },
    {
      front: "3rd closest to the sun",
      back: "Earth",
    },
    {
      front: "4th planet closest to sun",
      back: "Mars",
    },
    {
      front: "5th planet closest to sun",
      back: "Jupiter",
    },
    {
      front: "6th planet closest to sun",
      back: "Saturn",
    },
  ];

  return NextResponse.json(flashcards, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

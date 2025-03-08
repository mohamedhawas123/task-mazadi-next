import { BASE_URL, HEADERS } from "@/app/data/Constants/baseUrl";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path"); 

  if (!path) {
    return NextResponse.json({ error: "Missing API path" }, { status: 400 });
  }

  const apiUrl = `${BASE_URL}/${path}`;

  try {
    const response = await fetch(apiUrl, {
      headers: HEADERS,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

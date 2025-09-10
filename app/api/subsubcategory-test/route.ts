import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 
    message: "SubSubCategory API is working!",
    timestamp: new Date().toISOString(),
    route: "/api/subsubcategory"
  });
}

export async function POST() {
  return NextResponse.json({ 
    message: "SubSubCategory POST is working!",
    timestamp: new Date().toISOString()
  });
}
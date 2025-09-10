// Minimal test route to isolate the issue
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ 
      success: true,
      message: "SubSubCategory route is accessible",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      message: "Error in SubSubCategory route",
      error: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
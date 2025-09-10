// Add this debug endpoint to check database connection
// Create: app/api/debug/db/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Only import and test database connection at runtime, not build time
    const { dbConnectMarketPlace } = await import("@/lib/dbConnect");
    await dbConnectMarketPlace();
    return NextResponse.json({ 
      success: true, 
      message: "Database connected successfully",
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      message: "Database connection failed",
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
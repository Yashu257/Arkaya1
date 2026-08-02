import { NextResponse } from "next/server";
import { ProjectEnquiry } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const body: ProjectEnquiry = await request.json();

    // Server-side basic validation
    if (!body.name || !body.email || !body.description || !body.services || body.services.length === 0) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, description, or services." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Process enquiry (In production, log / forward to CRM or notification webhook)
    console.log("New Arkaya Project Enquiry Received:", {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      phone: body.phone || "N/A",
      services: body.services,
      stage: body.stage || "N/A",
      budget: body.budget || "N/A",
      descriptionLength: body.description.length,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully. Arkaya Tech will review your submission.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error while processing enquiry." },
      { status: 500 }
    );
  }
}

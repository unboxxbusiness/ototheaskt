import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, mobile } = await req.json();

    if (!name || !email || !mobile) {
      return NextResponse.json(
        { error: "Name, email, and mobile list are required." },
        { status: 400 }
      );
    }

    const notionApiKey = process.env.NOTION_API_KEY;
    const notionDatabaseId = process.env.NOTION_DATABASE_ID;

    if (!notionApiKey || !notionDatabaseId) {
      console.warn("⚠️ Notion API credentials are not configured in environment variables.");
      console.log(`Fallback Storage - Submitted Lead Data:`, { name, email, mobile });
      return NextResponse.json({
        success: true,
        fallback: true,
        message: "Pre-booked successfully! Notion integration is in local simulation mode (credentials not configured yet)."
      });
    }

    // Call Notion API
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: notionDatabaseId },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          },
          Email: {
            email: email,
          },
          Mobile: {
            phone_number: mobile,
          },
        },
      }),
    });

    if (!response.ok) {
      const errorDetail = await response.text();
      console.error("Notion API direct response error:", errorDetail);
      
      // Attempt fallback to rich_text property if phone_number results in schema error
      if (errorDetail.includes("phone_number") || errorDetail.includes("object_not_found")) {
        console.warn("Retrying Notion integration with Mobile as generic Rich Text text schema...");
        const fallbackResponse = await fetch("https://api.notion.com/v1/pages", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${notionApiKey}`,
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28",
          },
          body: JSON.stringify({
            parent: { database_id: notionDatabaseId },
            properties: {
              Name: {
                title: [{ text: { content: name } }],
              },
              Email: {
                email: email,
              },
              Mobile: {
                rich_text: [{ text: { content: mobile } }],
              },
            },
          }),
        });

        if (fallbackResponse.ok) {
          return NextResponse.json({ success: true, fallback: false, retried: true });
        }
      }

      return NextResponse.json(
        { error: `Notion submission failed: ${response.statusText}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, fallback: false, data });
  } catch (error: any) {
    console.error("Error submitting to Notion in server-side API:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}

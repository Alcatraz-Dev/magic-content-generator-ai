import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get the user ID from the Clerk auth middleware
    const { userId } = auth();

    // Check if the user is authenticated
    if (!userId) {
      return new NextResponse("User not Authenticated", { status: 401 });
    }

    // Extract data from the request body
    const { title, description, templateUsed } = await req.json();

    // Create new output in the database
    const createNewOutput = await db.aIOutput.create({
      data: {
        userId: userId,
        title: title,
        description: description,
        templateUsed: templateUsed,
      },
    });

    // Revalidate the cache for the homepage (if needed)
    await revalidatePath("/");

    // Return the newly created output with status 200
    return NextResponse.json(createNewOutput, { status: 200 });
  } catch (error) {
    console.error("POST AI GENERATE: NEW OUTPUT GENERATION ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
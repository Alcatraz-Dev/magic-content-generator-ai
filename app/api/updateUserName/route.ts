// app/api/updateUserName/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getAuth, clerkClient } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.redirect("/sign-in");
  }

  try {
    const { firstName, lastName, username } = await req.json();

    // Log the request body to debug
    console.log("Received data:", { firstName, lastName, username });

    // Prepare the update object (only include fields that are provided)
    const updateData: any = {};
    
    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;
    if (username) updateData.username = username;

    // If no data is provided, return an error
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: "No data provided for update." },
        { status: 400 }
      );
    }

    // Log the fields to be updated
    console.log(`Updating user with ID: ${userId}`, updateData);

    // Update the user in Clerk
    const updatedUser = await clerkClient.users.updateUser(userId, updateData);

    console.log("User updated successfully:", updatedUser);

    return NextResponse.json({ updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user information.", details: error },
      { status: 500 }
    );
  }
}
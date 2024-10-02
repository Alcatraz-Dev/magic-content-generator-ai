import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
function Auth() {
  return (
    <div>
      <SignedOut>
        <SignInButton>
          <Button  className="w-full  dark:text-black transition duration-300 text-white">Dashborad</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Auth;

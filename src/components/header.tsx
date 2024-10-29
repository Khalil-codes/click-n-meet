import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="container sticky top-0 mx-auto flex w-full justify-between border-b border-b-border px-4 py-4 backdrop-blur-md">
      <Link href="/" className="font-giest-mono text-2xl font-bold">
        ClicknMeet
      </Link>
      <div className="flex justify-end gap-4">
        <SignedIn>
          <Button asChild variant="outline">
            <Link href="/create">Get Started</Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <Button asChild variant="default">
            <Link href="/login">Login</Link>
          </Button>
        </SignedOut>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;

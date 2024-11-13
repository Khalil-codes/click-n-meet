import Image from "next/image";
import HeroImage from "../assets/images/meeting-hero.svg";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="mb-24 flex flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="gradient-title pb-6 text-7xl font-extrabold">
            Simplify your scheduling
          </h1>
          <p className="mb-10 text-xl text-gray-600 dark:text-gray-400">
            Click n Meet helps you simplify your scheduling process with one
            click and a few simple steps.
          </p>
          <SignedIn>
            <Button size="lg" className="text-lg" asChild variant="default">
              <Link href="/dashboard">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <Button size="lg" className="text-lg" asChild variant="default">
              <Link href="/login">Login</Link>
            </Button>
          </SignedOut>
        </div>
        <div className="flex w-full justify-center lg:w-1/2">
          <div className="relative aspect-square w-full max-w-md">
            <Image
              src={HeroImage}
              alt="Hero Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

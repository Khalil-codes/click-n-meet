import Image from "next/image";
import HeroImage from "../assets/images/meeting-hero.svg";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily Setup and customize your events",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Keep track of your availability",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalised links with others",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "Create your free Schedulrr account" },
  {
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    step: "Share Your Link",
    description: "Send your scheduling link to clients or colleagues",
  },
  {
    step: "Get Booked",
    description: "Receive confirmations for new appointments automatically",
  },
];

export default function Home() {
  return (
    <main className="py-10">
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
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
      {/* Key Features Section */}
      <section className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-blue-50 dark:bg-blue-900/40">
              <CardHeader>
                <feature.icon className="mx-auto mb-4 h-12 w-12 text-blue-500 dark:text-blue-200" />
                <CardTitle className="text-center text-blue-600 dark:text-blue-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 dark:text-gray-300">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* How It Works Section */}
      <section className="mb-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-slate-300">
                <span className="text-3xl font-bold text-blue-600">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.step}</h3>
              <p className="text-gray-600 dark:text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

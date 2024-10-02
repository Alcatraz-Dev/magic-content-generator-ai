import Auth from "@/components/Auth";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconCheck } from "@tabler/icons-react";

export default function StartupLandingPage() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 py-5 lg:px-6 h-14 flex justify-center items-center">
        <Link className="flex items-center justify-center mt-5" href="#">
          <Image src={"/favicon.ico"} width={50} height={50} alt="Logo" />
          <span className="hidden md:block lg:block text-orange-500 uppercase text-xl font-semibold">
            Magic Content Creator AI
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 mt-5">
          <div className="flex gap-4 justify-center items-center">
            <ModeToggle />
            <Auth />
          </div>
        </nav>
      </header>

      <main className="flex-1 justify-center items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 justify-center items-center">
          <div className="flex flex-col  justify-center items-center space-y-3 text-center">
            <div className="space-y-3">
              <h1 className="pb-5 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Welcome to magic content creator AI
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 my-20">
                Empowering your content creation with AI. Our platform
                simplifies the process by automating and enhancing your content
                creation workflows, boosting creativity and productivity with
                intelligent, AI-driven tools.
              </p>
            </div>
            <div className="space-x-4 pt-5 w-[200px] mx-auto">
              <Link href="/sign-up">
                <Button className="w-full dark:text-black transition duration-300  text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section as a Card */}
        <section className="w-full py-12 bg-gray-100 dark:bg-neutral-900">
          <div className="flex gap-2 flex-1">
            <Card className="w-[350px] h-[450px] my-10 mx-auto bg-white dark:bg-neutral-900 rounded-2xl dark:bg-[radial-gradient(circle_at_50%_0%,theme(colors.white/10%),transparent)] px-4 ring-1 ring-inset ring-white/5 border border-neutral-300 dark:border-neutral-700 shadow-lg transition-transform transform hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold">
                  One-time Purchase
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 pt-1">
                  10,000 AI Credit Points
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-16">
                <div className="flex flex-col space-y-3 mt-5">
                  <p className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                    <IconCheck className="text-green-400" />
                    100,000 words purchase
                  </p>
                  <p className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                    <IconCheck className="text-green-400" />
                    All template access
                  </p>
                  <p className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                    <IconCheck className="text-green-400" />
                    Retain all history
                  </p>
                </div>
              </CardContent>

              <div className="mx-5 mt-20">
                <Link href={"/sign-up"}>
                  <Button className="w-full  dark:text-black transition duration-300 text-white">
                    Purchase for 10 $
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Magic Content Creator AI Inc. All rights
          reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

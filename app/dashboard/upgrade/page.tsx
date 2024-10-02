"use client";
import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
function UpgradePlan() {
  const router = useRouter();
  const handlePurchase = async () => {
    const response = await axios.post("/api/checkout");
    router.push(response?.data?.url);
  };
  return (
    <div className="mx-5 py-2">
      <div className="flex flex-1">
        <div className="p-2 md:p-10 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex gap-2">
            {[...new Array(1)].map((i) => (
              <div
                key={"first-array" + i}
                className="h-20 w-full  bg-gray-200 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700 "
              >
                <div className="flex flex-row flex-1 px-2 gap-2  justify-between items-center mt-5 mx-2  ">
                  <h2 className="font-bold"> Upgrade Plan</h2>
                  <ModeToggle />
                </div>
              </div>
            ))}
          </div>

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
                <Button
                  onClick={handlePurchase}
                  className="w-full  dark:text-black transition duration-300 text-white"
                >
                  Purchase for 10 $ 
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpgradePlan;

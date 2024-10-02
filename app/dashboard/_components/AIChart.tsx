"use client";
import React, { useEffect, useState } from "react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";

export const description =
  "An AI usage chart with total usage and available credit";

const chartConfig = {
  desktop: {
    label: "Available Credit",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Usage Credit",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

function AIChart({
  avileveCredit,
  totalUsage,
}: {
  avileveCredit: number;
  totalUsage: number;
}) {
  const chartData = [
    { month: "January", available: `${avileveCredit}`, used: `${totalUsage}` },
  ];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setUsername(user.username || "");
      setAvatar(user.imageUrl || "");
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const updateData: any = {};
    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;
    if (username) updateData.username = username;

    if (Object.keys(updateData).length === 0) {
      setError("Please provide at least one field to update.");
      setLoading(false);
      return;
    }

    try {
      setFirstName(updateData.firstName || firstName);
      setLastName(updateData.lastName || lastName);
      setUsername(updateData.username || username);

      const response = await fetch("/api/updateUserName", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Something went wrong.");
      } else {
        setSuccess("User updated successfully!");
        await user?.reload();
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="flex flex-col mx-10 bg-white dark:bg-neutral-900 rounded-2xl dark:bg-[radial-gradient(circle_at_50%_0%,theme(colors.white/10%),transparent)] px-4 py-10 ring-1 ring-inset ring-white/5 border border-neutral-300 dark:border-neutral-700 shadow-lg">
      <CardHeader className="items-center">
        <CardTitle>AI Usage - Chart</CardTitle>
        <CardDescription>
          AI chart total usage and available credit
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-black dark:fill-white  font-bold text-lg"
                        >
                          {`${totalUsage}/${avileveCredit}`}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          AI credit usage
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="available"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="used"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-full mx-auto p-4  px-5 md:px-40 lg:px-40"
      >
        <h2 className="uppercase font-bold ">User Infromation </h2>
        <Card className="w-full h-full bg-transparent dark:bg-transparent border-none">
          <CardHeader>
            <CardDescription className="text-xs flex flex-col justify-between">
              <Image
                src={avatar}
                alt="Avatar"
                width={75}
                height={75}
                className="rounded-full object-cover"
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
                className="dark:border dark:border-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700 w-full py-3 px-4 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter last name"
                className="dark:border dark:border-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700 w-full py-3 px-4 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="dark:border dark:border-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700 w-full py-3 px-4 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 transition duration-150 ease-in-out"
              />
            </div>
          </CardContent>
          <CardFooter className="bg-transparent">
            <div className="grid w-full gap-y-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-md shadow-sm transition duration-150 ease-in-out"
              >
                {loading ? "Updating..." : "Update Information"}
              </Button>
              {error && (
                <Alert
                  className="border-none text-red-500 text-center"
                  variant="destructive"
                >
                  {error}
                </Alert>
              )}
              {success && (
                <Alert
                  className="border-none text-green-500 text-center"
                  variant="default"
                >
                  {success}
                </Alert>
              )}
            </div>
          </CardFooter>
        </Card>
      </form>
    </Card>
  );
}

export default AIChart;

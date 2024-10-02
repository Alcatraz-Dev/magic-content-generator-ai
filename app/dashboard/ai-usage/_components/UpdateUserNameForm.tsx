"use client";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState, useEffect } from "react";
import AIUsage from "../../_components/AIUsage";

const UpdateUserNameForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<string>(""); // Keep as a string for image URL
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
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
      // Optimistic UI update
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
        await user?.reload(); // Reload user data
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-lg mx-auto p-4 my-20"
      >
        <Card className="w-full h-full  bg-transparent dark:bg-transparent border-none">
          <CardHeader>
            <CardDescription className="text-xs flex flex-col justify-between">
              {/* Avatar Display */}

              <>
                <Image
                  src={avatar}
                  alt="Avatar"
                  width={75}
                  height={75}
                  className="rounded-full object-cover"
                />
              </>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-y-4">
            <label>First Name</label>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              className="dark:border dark:border-neutral-400 dark:hover:bg-neutral-700"
            />
            <label>Last Name</label>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className="dark:border dark:border-neutral-400 dark:hover:bg-neutral-700"
            />
            <label>Username</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="dark:border dark:border-neutral-400 dark:hover:bg-neutral-700"
            />
          </CardContent>
          <CardFooter className="bg-transparent">
            <div className="grid w-full gap-y-4">
              <Button type="submit" disabled={loading} className="w-full">
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
    </>
  );
};

export default UpdateUserNameForm;

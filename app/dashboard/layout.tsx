import React from "react";
import { DashboardSidebar } from "./_components/DashboardSidebar";
import AIUsage from "./_components/AIUsage";

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className=" bg-gray-100 dark:bg-neutral-800 text-black dark:text-white h-screen w-full">
      <DashboardSidebar children={children} />
    </div>
  );
}

export default DashboardLayout;

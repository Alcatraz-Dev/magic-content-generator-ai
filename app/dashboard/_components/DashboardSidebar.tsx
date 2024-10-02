"use client";
import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "../../../components/ui/sidebar";
import {
  IconArrowLeft,
  IconTools,
  IconCreditCard,
  IconHistory,
  IconUser,
  IconAi,
  IconBusinessplan,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useUser, SignOutButton } from "@clerk/nextjs"; // Added useClerk
import SearchDashboard from "./SearchDashboard";
import { ModeToggle } from "@/components/ModeToggle";
import { usePathname } from "next/navigation";
import Categories from "./Categories";
import { contentTemplates } from "@/lib/content-templet";
import TemplateList from "./TemplateList";

export function DashboardSidebar({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { user } = useUser();

  const path = usePathname();

  const links = [
    {
      label: "Tools ",
      href: "/dashboard",
      icon: (
        <IconTools className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Output History",
      href: "/dashboard/history",
      icon: (
        <IconHistory className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Upgrade plan",
      href: "/dashboard/upgrade",
      icon: (
        <IconCreditCard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "AI Usage",
      href: "/dashboard/ai-usage",
      icon: (
        <IconBusinessplan className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "",
      href: "",
      icon: (
        <div className="flex items-center gap-2">
          <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          <SignOutButton>
            <button className="text-neutral-700 dark:text-neutral-200">
              <span className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0">
                Sign Out
              </span>
            </button>
          </SignOutButton>
        </div>
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  // Add a loading state

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2 ">
              {links.map((link, idx) => (
                <SidebarLink
                  className={`${
                    path === links[idx].href
                      ? "border border-neutral-700 dark:border-neutral-300 rounded-lg p-1"
                      : ""
                  } `}
                  key={idx}
                  link={link}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center gap-2">
            <SidebarLink
              link={{
                ...user,
                label: `Hi, ${user?.username ? user.username : user?.fullName}`,
                href: "/dashboard/ai-usage",
                icon: (
                  <Image
                    src={user?.imageUrl as string}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="User image"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard children={children} />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex  text-sm text-black  relative z-20"
    >
      <div/>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium "
      >
        <div className="text-orange-500 font-bold uppercase text-sm flex flex-row items-start text-center">
          <Image src="/favicon.ico" width={40} height={40} alt="Logo" />
          <span className="text-center mt-3">Magic Content Creator AI</span> 
        </div>
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      {/* <div className="h-5 w-6 bg-orange-500 dark:bg-zinc-700 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
      <Image src="/favicon.ico" width={70} height={70} alt="Logo" />
    </Link>
  );
};

// Dummy dashboard component with content
interface DashboardProps {
  children: React.ReactNode;
}
const categories = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Youtube",
    value: "Youtube",
  },
  {
    name: "Tiktok",
    value: "Tiktok",
  },
  {
    name: "Linkedin",
    value: "Linkedin",
  },
  {
    name: "Facebook",
    value: "Facebook",
  },
  {
    name: "Instagram",
    value: "Instagram",
  },
  {
    name: "Twitter",
    value: "Twitter",
  },
  {
    name: "Blog",
    value: "Blog",
  },
  {
    name: "ATS Resume",
    value: "Resume",
  },
  {
    name: "Email Newsletter",
    value: "Email",
  },
  {
    name: "Podcast",
    value: "Podcast",
  },
  {
    name: "Coding",
    value: "Coding",
  },
  {
    name: "Grammar ",
    value: "Grammar",
  },
];

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const path = usePathname();
  const isDashboard = path === "/dashboard";
  const isTemplateRoute = contentTemplates?.some((item) =>
    path.startsWith(`/dashboard/templates/${item.slug}`)
  );
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        {!isTemplateRoute && isDashboard && (
          <div className="flex gap-2">
            {[...new Array(1)].map((i) => (
              <div
                key={"first-array" + i}
                className="h-[270px] md:h-[180px] lg:h-[180px] w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 "
              >
                <div className="flex flex-row flex-1 px-4 gap-2  justify-between items-center ">
                  <SearchDashboard
                    onSearchInput={setSearchInput}
                    searchInput={searchInput as string}
                  />
                  <ModeToggle />
                </div>
                <div className=" px-4 pl-5 flex justify-center items-center mb-10">
                  <Categories items={categories} />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-2 flex-1 ">
          <div className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 overflow-hidden">
            <>
              {path === "/dashboard" ? (
                <div className="h-screen overflow-y-auto max-h-[650px] md:max-h-[820px] lg:max-h-[750px] ">
                  <TemplateList searchInput={searchInput as string} />
                </div>
              ) : (
                <>{children}</>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

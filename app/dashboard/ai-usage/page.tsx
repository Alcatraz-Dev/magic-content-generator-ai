import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import AIUsage from "../_components/AIUsage";

const Settings = async () => {
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
                  <h2 className="font-bold">
                    {" "}
                    AI Usage Chart And User Information{" "}
                  </h2>
                  <ModeToggle />
                </div>
              </div>
            ))}
          </div>

    
          <div className="flex gap-2 flex-1 ">
            <div className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 overflow-hidden">
              <>
                <div className="h-screen overflow-y-auto max-h-[820px] ">
                  <AIUsage />
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

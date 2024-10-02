import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
const OutputHistory = async () => {
  const { userId } = auth();
  const userHistory = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });
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
                  <h2 className="font-bold">Output History</h2>
                  <ModeToggle />
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 flex-1">
            <div className="h-full w-full bg-gray-200 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700 ">
              <div className="bg-gray-200 dark:bg-neutral-900 rounded-2xl">
                <Table >
                  <TableCaption className="my-5 uppercase text-xs">
                    A list of your recent ai output history.
                  </TableCaption>
                  <TableHeader className="dark:hover:bg-neutral-800">
                    <TableRow>
                      <TableHead className="text-xs w-[200px]">Template</TableHead>
                      <TableHead className="w-[250px] text-xs">Title</TableHead>
                      <TableHead className="text-xs">Description</TableHead>
                      <TableHead className="pr-2 text-xs">Created{''} At</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody >
                    {userHistory && userHistory.length > 0
                      ? userHistory.map((history) => (
                          <TableRow key={history.id} className="dark:hover:bg-neutral-800">
                            <TableCell className="text-xs w-[200px] ">{history.templateUsed}</TableCell>
                            <TableCell className="w-[250px] text-xs ">{history.title}</TableCell>
                            <TableCell className="whitespace-pre-wrap line-clamp-2 hover:line-clamp-none text-xs">
                              {history.description}
                            </TableCell>
                            <TableCell className="text-xs">
                              {new Date(history.createdAt).toLocaleDateString(
                                undefined,
                                {
                                  year: "numeric",
                                  month: "numeric", // You can use "short" for abbreviated month names
                                  day: "numeric",
                                }
                              )}
                            </TableCell>
                          </TableRow>
                        ))
                      : null}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputHistory;

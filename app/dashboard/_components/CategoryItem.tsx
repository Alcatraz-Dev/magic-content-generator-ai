"use client";
import React from "react";
import { CategoriesProps } from "../_components/Categories";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
function CategoryItem({ name, value }: CategoriesProps) {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const isSelected = currentCategory === value;
  const handleOnClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathName,
        query: {
          category: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(url);
  };
  return (
    <Button
      variant="outline"
      className={cn(
        "py-1 px-3 hover:bg-white dark:hover:bg-neutral-700 text-xs hover-bg-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-full cursor-pointer"
      )}
      onClick={handleOnClick}
    >
      {name}
    </Button>
  );
}

export default CategoryItem;

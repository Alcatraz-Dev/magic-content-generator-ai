"use client";
import React, { useEffect, useState } from "react";
import { contentTemplates } from "@/lib/content-templet";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function TemplateList({ searchInput }: { searchInput?: string }) {
  const [templateList, setTemplateList] = useState(contentTemplates);
  const [noResults, setNoResults] = useState(false); // State for no results
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");
  // ! search input
  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filteredTemplates = contentTemplates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      setTemplateList(filteredTemplates);
      setNoResults(filteredTemplates.length === 0); // Update no results state
    } else {
      setTemplateList(contentTemplates);
      setNoResults(false); // Reset no results state
    }
  }, [searchInput]);
  // ! search category
  useEffect(() => {
    if (searchCategory === "All") {
      setTemplateList(contentTemplates);
    } else if (searchCategory) {
      const filtedTemplateList = contentTemplates.filter(
        (item) => item.category === searchCategory
      );
      setTemplateList(filtedTemplateList);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchCategory]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 my-5">
      {noResults ? (
        <div className="text-center col-span-full">No results found</div>
      ) : (
        templateList.map((template) => {
          const IconComponent = template.icon; // Get the icon component
          return (
            <div key={template.slug}>
              <Link
                href={`/dashboard/templates/${template.slug}`}
                className="bg-gray-100 border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 rounded-lg py-5 px-5 h-[200px] text-center flex flex-col justify-center"
              >
                {/* Render the icon */}
                <IconComponent className="h-12 w-12 mx-auto" />{" "}
                {/* Render the title */}
                <h2 className="font-semibold mt-4">{template.name}</h2>
                {/* Render the descripion */}
                <p className="text-xs my-3">{template.desc}</p>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default TemplateList;

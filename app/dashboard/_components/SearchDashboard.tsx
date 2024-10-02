import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import React from "react";



export interface SearchDashboardProps {
  onSearchInput: (input: string) => void;
  searchInput: string;
}

const SearchDashboard: React.FC<SearchDashboardProps> = ({ onSearchInput ,searchInput}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchInput(e.target.value); // Pass the new input value
  };

  return (
    <div className="mx-5 py-5 max-w-4xl relative">
      <IconSearch className="h-5 w-5 absolute mt-2.5 ml-3" />

      <Input
        type="text"
        placeholder="Search..."
        className="w-full rounded-full px-10 py-2 focus:outline-none border border-neutral-300 dark:border-neutral-700 focus:border-neutral-700 dark:focus:border-neutral-500"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchDashboard;

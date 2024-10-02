import React from "react";
import CategoryItem from "./CategoryItem";
export interface CategoriesProps {
  name: string;
  value: string;
}
function Categories({ items }: { items: CategoriesProps[] }) {
  return (
    <div className="flex gap-2 flex-wrap justify-center items-center lg:mt-5 md:mt-5">
      {items.map((category) => (
        <CategoryItem
          key={category.name}
          name={category.name}
          value={category.value}
        ></CategoryItem>
      ))}
    </div>
  );
}

export default Categories;

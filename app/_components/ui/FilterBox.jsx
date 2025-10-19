"use client";

import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function FilterBox({ title = "", hasAll = false, filterName, items = [] }) {
  const searchParams = useSearchParams();
  const filterValue = searchParams.get(filterName);
  const router = useRouter();
  const pathname = usePathname();
  const { modal, closeModal } = useGlobalContext();

  function setFilter(newFilter) {
    //add the new filter to the current searchParams
    const sParams = new URLSearchParams(searchParams);
    sParams.set(filterName, newFilter);
    router.replace(`${pathname}?${sParams.toString()}`);
    modal?.open && closeModal();
  }

  function removeFilter() {
    //remove the filter from the current searchParams
    const sParams = new URLSearchParams(searchParams);
    sParams.delete(filterName);
    router.replace(`${pathname}?${sParams.toString()}`);
    modal?.open && closeModal();
  }

  return (
    <div className="flex items-center gap-2 text-sm py-1.5 ps-2 pe-1 bg-white border border-gray-300 rounded-md">
      <p className="font-medium">{title}</p>
      <ul className="flex items-center gap-2 [&_li]:cursor-pointer [&_li]:rounded [&_li]:transition-all [&_li]:duration-300">
        {hasAll && (
          <li
            className={`px-2 py-1 ${
              !filterValue ? "bg-primary-500 text-white" : ""
            }`}
            onClick={removeFilter}
          >
            همه
          </li>
        )}
        {items?.map((item, index) => (
          <li
            key={index}
            className={`${
              filterValue === item?.value ? "bg-primary-500 text-white" : ""
            } px-2 py-1`}
            onClick={() => setFilter(item?.value)}
          >
            {item?.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterBox;

"use client";

import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNavbarItem({ item }) {
  const pathname = usePathname();
  const isActive = pathname === item?.href;
  const { isDrawerOpen, setIsDrawerOpen } = useGlobalContext();

  return (
    <li>
      <Link
        href={item?.href}
        className={`${
          isActive
            ? "text-secondary-500 font-medium"
            : "hover:pr-2 cursor-pointer"
        } transition-all duration-300 flex items-center gap-2`}
        onClick={() => (isDrawerOpen ? setIsDrawerOpen(false) : null)}
      >
        {item?.icon}
        {item?.title}
      </Link>
    </li>
  );
}

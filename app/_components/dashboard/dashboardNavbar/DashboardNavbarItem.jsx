"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNavbarItem({ item }) {
  const pathname = usePathname();
  const isActive = pathname === item?.href;

  return (
    <li>
      <Link
        href={item?.href}
        className={`${
          isActive
            ? "text-secondary-500 font-medium"
            : "hover:text-secondary-500 hover:pr-2"
        } transition-all duration-300 cursor-pointer flex items-center gap-2`}
      >
        {item?.icon}
        {item?.title}
      </Link>
    </li>
  );
}

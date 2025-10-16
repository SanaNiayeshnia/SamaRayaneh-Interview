import { CircularProgress } from "@mui/material";
import Link from "next/link";

export default function Button({
  isPending = false,
  href = "",
  className = "",
  children,
  ...rest
}) {
  const classes = `bg-secondary-500 py-2 px-3 rounded-md text-white transition-all duration-300 hover:bg-secondary-600 hover:px-4 hover:rounded-none cursor-pointer flex items-center gap-2 ${
    rest.disabled ? "opacity-70" : ""
  } ${className}`;

  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button {...rest} className={classes}>
      {children}
      {isPending && <CircularProgress color="white" size="20px" />}
    </button>
  );
}

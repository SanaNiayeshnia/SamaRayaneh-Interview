import { CircularProgress } from "@mui/material";
import Link from "next/link";

export default function Button({
  isPending = false,
  href = "",
  className = "",
  variant = "secondary",
  children,
  ...rest
}) {
  const classes = ` py-2 px-3 rounded-md  transition-all duration-300   cursor-pointer flex items-center gap-2 ${
    variant === "secondary"
      ? "bg-secondary-500 hover:rounded-none text-white hover:bg-secondary-600 hover:px-4"
      : variant === "primary"
      ? "text-primary-500 bg-white border-gray-300 border active:text-white active:bg-primary-600 hover:bg-primary-600 hover:text-white"
      : ""
  } ${rest.disabled ? "opacity-70" : ""} ${className}`;

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

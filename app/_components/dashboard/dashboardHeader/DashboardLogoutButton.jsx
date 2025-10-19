"use client";
import { logoutAction } from "@/app/_lib/actions";
import LogoutIcon from "@mui/icons-material/Logout";
import { CircularProgress } from "@mui/material";
import { useTransition } from "react";

function DashboardLogoutButton() {
  const [isPending, startTransition] = useTransition();

  function handleLogout() {
    startTransition(logoutAction);
  }

  return (
    <button
      className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-secondary-500 active:text-secondary-500"
      onClick={handleLogout}
    >
      خروج
      {isPending ? (
        <CircularProgress color="black" size="20px" />
      ) : (
        <LogoutIcon />
      )}
    </button>
  );
}

export default DashboardLogoutButton;

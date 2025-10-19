"use client";
import { useState } from "react";
import Logo from "../../ui/Logo";
import DashboardLogoutButton from "./DashboardLogoutButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import DashboardNavbar from "../dashboardNavbar/DashboardNavbar";
import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";

function DashboardHeader() {
  const { isDrawerOpen, setIsDrawerOpen } = useGlobalContext();
  function toggleDrawer() {
    setIsDrawerOpen((open) => !open);
  }
  return (
    <>
      <header className="py-2 px-4 border-b-2 border-primary-500 grid grid-cols-[0.5fr_5fr_0.5fr] md:flex items-center justify-between">
        <button className="md:hidden" onClick={toggleDrawer}>
          <MenuIcon className="!text-3xl cursor-pointer active:text-secondary-500 transition-all duration-300" />
        </button>
        <div className="flex justify-center">
          <Logo />
        </div>
        <DashboardLogoutButton />
      </header>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <DashboardNavbar />
      </Drawer>
    </>
  );
}

export default DashboardHeader;

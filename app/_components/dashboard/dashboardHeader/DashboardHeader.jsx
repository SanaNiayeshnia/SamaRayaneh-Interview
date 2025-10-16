import Logo from "../../ui/Logo";
import DashboardLogoutButton from "./DashboardLogoutButton";

function DashboardHeader() {
  return (
    <header className="py-2 px-4 border-b-2 border-primary-500 flex items-center justify-between">
      <Logo />
      <DashboardLogoutButton />
    </header>
  );
}

export default DashboardHeader;

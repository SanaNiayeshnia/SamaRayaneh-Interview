import LogoutIcon from "@mui/icons-material/Logout";

function DashboardLogoutButton() {
  return (
    <button className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-secondary-500">
      خروج
      <LogoutIcon />
    </button>
  );
}

export default DashboardLogoutButton;

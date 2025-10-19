import DashboardNavbarItem from "./DashboardNavbarItem";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";

function DashboardNavbar() {
  const navItems = [
    {
      title: "داشبورد",
      href: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "مدیریت بیماران",
      href: "/dashboard/patient-management",
      icon: <PeopleIcon />,
    },
  ];
  return (
    <div className="md:border-l-2 border-primary-500 p-4 min-w-48 h-full">
      <ul className="space-y-3">
        {navItems?.map((item, index) => (
          <DashboardNavbarItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default DashboardNavbar;

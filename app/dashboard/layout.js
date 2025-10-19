import DashboardHeader from "../_components/dashboard/dashboardHeader/DashboardHeader";
import DashboardNavbar from "../_components/dashboard/dashboardNavbar/DashboardNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader />
      <div className="flex flex-grow">
        <div className="hidden md:block h-full">
          <DashboardNavbar />
        </div>
        <main className="overflow-auto flex-grow py-4 px-6 md:px-8 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}

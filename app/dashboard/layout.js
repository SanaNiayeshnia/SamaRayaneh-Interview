import DashboardHeader from "../_components/dashboard/dashboardHeader/DashboardHeader";
import DashboardNavbar from "../_components/dashboard/dashboardNavbar/DashboardNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader />
      <div className="flex flex-grow">
        <DashboardNavbar />
        <main className="overflow-auto flex-grow p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}

import AddNewPatient from "@/app/_components/patientManagement/AddNewPatient";
import PatientFilters from "@/app/_components/patientManagement/PatientFilters";
import PatientManagementMain from "@/app/_components/patientManagement/PatientManagementMain";
import PatientsTable from "@/app/_components/patientManagement/PatientsTable";
import { Suspense } from "react";

export const metadata = { title: "مدیریت بیماران" };

async function PatientManagement({ searchParams }) {
  const { status, sort } = await searchParams;
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">فهرست بیماران</h2>
      </div>
      <section className="space-y-2">
        <div className="flex items-center gap-2 justify-end">
          <PatientFilters />
          <AddNewPatient />
        </div>
        <Suspense
          fallback={<PatientsTable loading />}
          key={`${status}-${sort}`}
        >
          <PatientManagementMain />
        </Suspense>
      </section>
    </div>
  );
}

export default PatientManagement;

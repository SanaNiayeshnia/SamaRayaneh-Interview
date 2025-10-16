import PatientsTable from "@/app/_components/patientManagement/PatientsTable";

function PatientManagement() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">مدیریت بیماران</h2>
      </div>
      <PatientsTable />
    </div>
  );
}

export default PatientManagement;

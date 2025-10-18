import PatientManagementMain from "@/app/_components/patientManagement/PatientManagementMain";

function PatientManagement() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">فهرست بیماران</h2>
      </div>
      <PatientManagementMain />
    </div>
  );
}

export default PatientManagement;

import CustomDataGrid from "@/app/_components/ui/CustomDataGrid";
import { getPatients } from "@/app/_lib/data_services";

async function PatientManagement() {
  const patients = await getPatients();
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">مدیریت بیماران</h2>
      </div>
      <CustomDataGrid data={patients} />
    </div>
  );
}

export default PatientManagement;

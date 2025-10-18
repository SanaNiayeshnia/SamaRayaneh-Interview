import { getPatients } from "@/app/_lib/data_services";
import PatientsTable from "./PatientsTable";
import AddNewPatient from "./AddNewPatient";

async function PatientManagementMain() {
  const patients = await getPatients();

  return (
    <section className="space-y-2">
      <div className="flex items-center gap-2 justify-end">
        <AddNewPatient />
      </div>
      <PatientsTable patients={patients} />
    </section>
  );
}

export default PatientManagementMain;

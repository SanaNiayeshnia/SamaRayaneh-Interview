import { getPatients } from "@/app/_lib/data_services";
import PatientsTable from "./PatientsTable";

async function PatientManagementMain() {
  const patients = await getPatients();

  return (
    <section>
      <PatientsTable patients={patients} />
    </section>
  );
}

export default PatientManagementMain;

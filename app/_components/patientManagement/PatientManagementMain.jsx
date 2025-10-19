import { getPatients } from "@/app/_lib/data_services";
import PatientsTable from "./PatientsTable";

async function PatientManagementMain() {
  const patients = await getPatients();

  return <PatientsTable patients={patients?.result} />;
}

export default PatientManagementMain;

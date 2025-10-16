import { getPatients } from "@/app/_lib/data_services";
import CustomDataGrid from "../ui/CustomDataGrid";

async function PatientsTable() {
  const patients = await getPatients();

  return <CustomDataGrid rows={patients} />;
}

export default PatientsTable;

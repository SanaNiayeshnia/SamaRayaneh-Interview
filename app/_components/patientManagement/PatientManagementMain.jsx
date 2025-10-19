import { getPatients } from "@/app/_lib/data_services";
import PatientsTable from "./PatientsTable";
import AddNewPatient from "./AddNewPatient";
import FilterBox from "../ui/FilterBox";
import { patientStatuses } from "@/app/_lib/variables";

async function PatientManagementMain() {
  const patients = await getPatients();

  return (
    <section className="space-y-2">
      <div className="flex items-center gap-2 justify-end">
        <FilterBox
          items={patientStatuses?.map((status) => ({
            ...status,
            value: status?.value ? "active" : "notActive",
          }))}
          title="وضعیت:"
          hasAll
          filterName="status"
        />
        <AddNewPatient />
      </div>
      <PatientsTable patients={patients?.result} />
    </section>
  );
}

export default PatientManagementMain;

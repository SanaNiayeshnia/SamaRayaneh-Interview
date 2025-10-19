"use client";
import { patientStatuses } from "@/app/_lib/variables";
import Button from "../ui/Button";
import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterBox from "../ui/FilterBox";
import PatientSorting from "./PatientSorting";

function PatientFilters() {
  const { openModal } = useGlobalContext();
  function Filters() {
    return (
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-2">
        <FilterBox
          items={patientStatuses?.map((status) => ({
            ...status,
            value: status?.value ? "active" : "notActive",
          }))}
          title="وضعیت:"
          hasAll
          filterName="status"
        />
        <PatientSorting />
      </div>
    );
  }

  function openFiltersModal() {
    openModal({ title: "فیلترها", content: <Filters /> });
  }

  return (
    <>
      <Button
        className="md:hidden"
        variant="primary"
        onClick={openFiltersModal}
      >
        فیلترها
        <FilterListIcon />
      </Button>
      <div className="hidden md:block">
        <Filters />
      </div>
    </>
  );
}
export default PatientFilters;

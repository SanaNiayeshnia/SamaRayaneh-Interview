"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FormSelect from "../ui/form/FormSelect";

const sortOptions = [
  { label: "نام بیمار (آ-ی)", value: "name-asc" },
  { label: "نام بیمار (ی-آ)", value: "name-desc" },
];

function PatientSorting() {
  const searchParams = useSearchParams();
  const sortFilter = searchParams.get("sort") || "name-asc";
  const router = useRouter();
  const pathname = usePathname();

  function setNewFilter(newFilter) {
    //add the new filter to the current searchParams
    const sParams = new URLSearchParams(searchParams);
    sParams.set("sort", newFilter);
    router.replace(`${pathname}?${sParams.toString()}`);
  }

  return (
    <FormSelect
      label="مرتب سازی"
      options={sortOptions}
      value={sortFilter}
      onChange={setNewFilter}
    />
  );
}

export default PatientSorting;

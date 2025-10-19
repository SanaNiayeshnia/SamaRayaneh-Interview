"use client";
import AddIcon from "@mui/icons-material/Add";
import Button from "../ui/Button";
import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import CreateUpdatePatientForm from "./CreateUpdatePatientForm";

function AddNewPatient() {
  const { openModal } = useGlobalContext();

  function handleClickBtn() {
    openModal({
      title: "ایجاد بیمار جدید",
      content: <CreateUpdatePatientForm />,
    });
  }

  return (
    <Button variant="primary" onClick={handleClickBtn}>
      <AddIcon />
    </Button>
  );
}

export default AddNewPatient;

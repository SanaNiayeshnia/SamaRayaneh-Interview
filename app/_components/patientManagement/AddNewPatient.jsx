"use client";
import AddIcon from "@mui/icons-material/Add";
import Button from "../ui/Button";
import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";

function AddNewPatient() {
  const { openModal } = useGlobalContext();
  function handleClickBtn() {
    openModal({
      title: "اضافه‌کردن بیمار جدید",
      content: <div></div>,
    });
  }
  return (
    <Button variant="primary" onClick={handleClickBtn}>
      <AddIcon />
    </Button>
  );
}

export default AddNewPatient;

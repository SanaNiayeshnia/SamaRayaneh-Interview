"use client";
import { deletePatient } from "@/app/_lib/actions";
import Form from "../ui/form/Form";
import { useActionState, useEffect } from "react";
import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";

function DeletePatientForm({ patientId = "" }) {
  console.log(patientId);
  const [state, formAction, pending] = useActionState(
    deletePatient.bind(null, patientId),
    null
  );
  const { openToast, closeModal } = useGlobalContext();

  useEffect(() => {
    if (!state) return;
    else if (state.isSuccessed) {
      openToast({
        text: "بیمار موردنظر با موفقیت حذف شد.",
        severity: "success",
      });
      closeModal();
    } else if (!state.isSuccessed) {
      openToast({
        text: "حذف بیمار موردنظر با خطا مواجه شد!",
        severity: "error",
      });
      closeModal();
    }
  }, [state]);

  return (
    <Form action={formAction} submitBtnText="حذف" isPending={pending}>
      <p>آیا از حذف این بیمار اطمینان دارید؟</p>
    </Form>
  );
}

export default DeletePatientForm;

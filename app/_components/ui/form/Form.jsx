"use client";

import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import FormButton from "./FormButton";
import { CircularProgress } from "@mui/material";
import { useFormStatus } from "react-dom";

function Form({
  submitBtnText,
  isPending = false,
  onCancel = () => {},
  children,
  ...rest
}) {
  const { closeModal } = useGlobalContext();
  const { pending: formStatusPending } = useFormStatus();
  function handleCancel() {
    closeModal();
    onCancel();
  }

  return (
    <form className="flex flex-col gap-4 pt-2" {...rest}>
      {children}
      <div className="flex items-center justify-end gap-2">
        <FormButton
          onClick={handleCancel}
          variant="secondary"
          type="reset"
          disabled={isPending || formStatusPending}
        >
          لغو
        </FormButton>
        <FormButton type="submit" disabled={isPending || formStatusPending}>
          {submitBtnText || "تایید"}
          {(isPending || formStatusPending) && (
            <CircularProgress color="black" size="18px" />
          )}
        </FormButton>
      </div>
    </form>
  );
}

export default Form;

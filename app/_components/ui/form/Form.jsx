"use client";

import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import FormButton from "./FormButton";
import { CircularProgress } from "@mui/material";

function Form({
  action = "",
  onSubmit = "",
  submitBtnText,
  isPending = false,
  onCancel = () => {},
  children,
  ...rest
}) {
  const { closeModal } = useGlobalContext();
  function handleCancel() {
    closeModal();
    onCancel();
  }

  return (
    <form
      onSubmit={onSubmit}
      action={action}
      className="flex flex-col gap-4"
      {...rest}
    >
      {children}
      <div className="flex items-center justify-end gap-2">
        <FormButton onClick={handleCancel} variant="secondary" type="reset">
          لغو
        </FormButton>
        <FormButton type="submit">
          {isPending && <CircularProgress color="black" size="18px" />}

          {submitBtnText || "تایید"}
        </FormButton>
      </div>
    </form>
  );
}

export default Form;

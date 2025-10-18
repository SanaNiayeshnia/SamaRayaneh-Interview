"use client";

import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import FormButton from "./form/FormButton";

function CustomModal() {
  const { modal, closeModal } = useGlobalContext();

  function handleClose() {
    closeModal();
    modal?.onClose?.();
  }

  return (
    <Dialog
      open={modal?.open}
      onClose={handleClose}
      className="[&_.MuiPaper-root]:min-w-9/10 sm:[&_.MuiPaper-root]:min-w-7/10 md:[&_.MuiPaper-root]:min-w-[450px] "
      sx={{ minWidth: "300px" }}
    >
      <DialogTitle className="text-primary-500">{modal?.title}</DialogTitle>
      <DialogContent className="!pt-2">{modal?.content}</DialogContent>
      {modal?.actions && (
        <DialogActions>
          <FormButton onClick={handleClose} variant="secondary">
            لغو
          </FormButton>
          <FormButton type="submit" form={modal?.actions?.formId}>
            {modal?.actions?.isPending && (
              <CircularProgress color="black" size="18px" />
            )}

            {modal?.actions?.submitText || "تایید"}
          </FormButton>
        </DialogActions>
      )}
    </Dialog>
  );
}

export default CustomModal;

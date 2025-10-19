"use client";

import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
      <DialogTitle className="text-primary-500 flex items-center gap-4 justify-between">
        {modal?.title}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          size="small"
          sx={{ color: "gray" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{modal?.content}</DialogContent>
    </Dialog>
  );
}

export default CustomModal;

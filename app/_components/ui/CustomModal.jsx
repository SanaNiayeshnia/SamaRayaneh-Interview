"use client";

import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

function CustomModal() {
  const { modal, closeModal } = useGlobalContext();

  return (
    <Dialog
      open={modal?.open}
      onClose={closeModal}
      className="[&_.MuiPaper-root]:min-w-9/10 sm:[&_.MuiPaper-root]:min-w-7/10 md:[&_.MuiPaper-root]:min-w-[450px] "
      sx={{ minWidth: "300px" }}
    >
      <DialogTitle className="text-primary-500">{modal?.title}</DialogTitle>
      <DialogContent>{modal?.content}</DialogContent>
    </Dialog>
  );
}

export default CustomModal;

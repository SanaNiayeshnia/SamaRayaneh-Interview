import { Alert, Snackbar } from "@mui/material";

function Toast({
  isOpen = false,
  duration = 3000,
  onClose,
  text = "",
  severity = "info",
}) {
  //using MUI toast(even though handling toasts are way easier with other libraries!)

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      sx={{
        ".MuiPaper-root": {
          display: "flex",
          gap: "8px !important",
          alignItems: "center",
          boxShadow: "0px 0px 4px var(--color-gray-400)",
        },
      }}
    >
      <Alert
        severity={severity}
        onClose={onClose}
        sx={{
          ".MuiAlert-action": { padding: 0 },
          ".MuiAlert-icon": { margin: 0 },
        }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
}

export default Toast;

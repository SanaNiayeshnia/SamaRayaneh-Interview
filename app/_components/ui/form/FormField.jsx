import { TextField } from "@mui/material";

function FormField({ label = "", error = "", ...rest }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <TextField
        variant="outlined"
        label={label}
        {...rest}
        className="w-full"
        error={!!error}
        helperText={error}
      />
    </div>
  );
}

export default FormField;

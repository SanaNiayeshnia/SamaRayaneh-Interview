"use client";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function FormSelect({
  label = "",
  labelId = "",
  value = "",
  onChange = () => {},
  options = [],
  error = false,
}) {
  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select labelId={labelId} value={value} label={label} onChange={onChange}>
        {options?.map((option, index) => (
          <MenuItem key={index} value={option?.value}>
            {option?.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}

export default FormSelect;

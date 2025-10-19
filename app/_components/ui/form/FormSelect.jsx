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
    <div className="min-w-40">
      <FormControl
        fullWidth
        sx={{ "& .MuiFormHelperText-root": { display: "none" } }}
      >
        <InputLabel id={labelId} className="!text-sm">
          {label}
        </InputLabel>
        <Select
          labelId={labelId}
          value={value}
          label={label}
          onChange={(e) => onChange(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderColor: "#d1d5dc !important",
            borderRadius: "5px",
            fontSize: "14px",
            "& .MuiSelect-select": {
              padding: "10.5px !important",
            },
          }}
          size="small"
          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root": {
                  fontSize: "14px",
                },
              },
            },
          }}
        >
          {options?.map((option, index) => (
            <MenuItem key={index} value={option?.value}>
              {option?.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default FormSelect;

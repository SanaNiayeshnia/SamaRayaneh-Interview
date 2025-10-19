"use client";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";

function DatePicker({
  label = "تاریخ و زمان",
  value = "",
  onChange = () => {},
  ...rest
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <MUIDatePicker
        label={label}
        localeText={{ okButtonLabel: "تایید", cancelButtonLabel: "لغو" }}
        renderInput={(params) => <TextField {...params} />}
        value={value || null}
        onChange={onChange}
        {...rest}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;

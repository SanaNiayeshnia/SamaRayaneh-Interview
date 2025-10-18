import { format } from "date-fns-jalali";

export function formatDate(date, formatStr = "yyyy/MM/dd") {
  return format(date, formatStr);
}

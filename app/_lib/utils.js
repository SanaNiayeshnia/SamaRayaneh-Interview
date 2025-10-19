import { format } from "date-fns-jalali";

export function formatDate(date, formatStr = "yyyy/MM/dd") {
  return format(date, formatStr);
}

export function sortData(data = [], sortFilter) {
  switch (sortFilter) {
    case "name-asc":
      return data.slice().sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return data.slice().sort((a, b) => b.name.localeCompare(a.name));

    default:
      return data;
  }
}

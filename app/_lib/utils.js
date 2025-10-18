import moment from "moment-jalaali";
moment.loadPersian({ usePersianDigits: true });

export function formatDate(date, format = "jYYYY/jMM/jDD") {
  return moment(date).format(format);
}

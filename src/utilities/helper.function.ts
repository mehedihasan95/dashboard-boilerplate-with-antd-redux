import dayjs from "dayjs";

// TEXT TRUNCATE
export const truncateText = (
  text: string | undefined,
  length?: number
): string | null => {
  const effectiveLength: number = length ?? 20;
  if (!text) {
    return null;
  }
  return text.length > effectiveLength
    ? text.slice(0, effectiveLength).concat("...")
    : text;
};

// DATE FORMATTER
export const dateAndTimeFormatter = (
  date: string,
  format:
    | "DD MMM YYYY"
    | "DD MMM YYYY, hh:mm A"
    | "DD/MM/YYYY"
    | "dddd, Do MMM YYYY"
    | "DD/MM/YYYY, hh:mm A" = "dddd, Do MMM YYYY"
) => {
  return dayjs(date).format(format);
};

// YAER CONCAT WITH DATE AND MONTH
export const yearConcatWithDate = (year: number) => {
  return dayjs(dayjs().format("MM-DD").concat(`-${year}`));
};

// NUMBER FORMAT TO FIXED DECIMAL
export const formatToFixedDecimals = (
  number: number,
  decimals: number = 2
): number => {
  return Number(number?.toFixed(decimals));
};

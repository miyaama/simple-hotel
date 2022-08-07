export const getFormattedDate = (date = new Date()) =>
  new Date(date).toISOString().split("T")[0];

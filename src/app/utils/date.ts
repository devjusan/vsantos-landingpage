export const formatDate = (
  date: string,
  options?: Intl.DateTimeFormatOptions
) => {
  return new Date(date).toLocaleDateString("pt-br", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  });
};

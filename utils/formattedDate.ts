export const formattedDate = (date: string): string => {
  return new Date(date).toLocaleDateString().replace(/\.$/, "");
};

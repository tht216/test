export const formatNumber = (number: number) => {
  // Convert the number to a string
  const numStr = number.toString();

  // Check the length of the string
  if (numStr.length <= 3) {
    // If it has 3 or fewer digits, return it as is
    return numStr;
  }

  // Otherwise, split the string into groups of three digits and add commas
  const parts = [];
  for (let i = numStr.length - 1, j = 0; i >= 0; i--, j++) {
    if (j > 0 && j % 3 === 0) {
      parts.unshift(".");
    }
    parts.unshift(numStr[i]);
  }

  // Join the parts to create the formatted number
  return parts.join("");
};

export const formatDate: (date: Date) => string = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
};

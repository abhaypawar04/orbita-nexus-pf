// Utility functions for the portfolio

/**
 * Format a date to a readable string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Truncate a string to a specified length
 */
export const truncateString = (str, length = 100) => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};

/**
 * Debounce function for performance optimization
 */
export const debounce = (func, wait = 100) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

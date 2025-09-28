import { useState, useEffect } from "react";

export const useCurrentYear = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    const updateYear = () => {
      const year = new Date().getFullYear();
      setCurrentYear(year);
    };

    const interval = setInterval(updateYear, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  return currentYear;
};

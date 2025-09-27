import { useState, useCallback } from "react";
import { CategoryState } from "../../infrastructure/types/navigation.types";
import { INITIAL_CATEGORY_STATE } from "../../infrastructure/constants/navigation.constants";

export const useHeaderNavigation = () => {
  const [activeSidebar, setActiveSidebar] = useState<boolean>(false);
  const [activeCategoria, setActiveCategoria] = useState<CategoryState>(
    INITIAL_CATEGORY_STATE
  );

  const handleCategoria = useCallback((categoria: string): void => {
    setActiveCategoria((prev) => ({
      ...prev,
      [categoria]: !prev[categoria],
    }));
  }, []);

  const getConditionalStyle = useCallback(
    (category: string) => ({
      transform: activeCategoria[category] ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.5s ease-in-out",
    }),
    [activeCategoria]
  );

  const closeSidebar = useCallback((): void => {
    setActiveSidebar(false);
  }, []);

  const openSidebar = useCallback((): void => {
    setActiveSidebar(true);
  }, []);

  return {
    activeSidebar,
    activeCategoria,
    handleCategoria,
    getConditionalStyle,
    closeSidebar,
    openSidebar,
  };
};

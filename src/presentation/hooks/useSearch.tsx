import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [articuloBuscado, setArticuloBuscado] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setArticuloBuscado(event.target.value);
    },
    []
  );

  const executeSearch = useCallback((): void => {
    if (articuloBuscado.trim()) {
      navigate(`/producto/${articuloBuscado}`);
      setActiveSearch(false);
    }
  }, [articuloBuscado, navigate]);

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === "Enter") {
        executeSearch();
      }
    },
    [executeSearch]
  );

  const openSearch = useCallback((): void => {
    setActiveSearch(true);
  }, []);

  const closeSearch = useCallback((): void => {
    setActiveSearch(false);
  }, []);

  return {
    activeSearch,
    articuloBuscado,
    handleSearch,
    executeSearch,
    handleKeyPress,
    openSearch,
    closeSearch,
  };
};

import { useEffect } from "react";

function useScrollLock(locked: boolean) {
  useEffect(() => {
    const { style } = document.body;
    const prevOverflow = style.overflow;
    if (locked) {
      style.overflow = "hidden";
    } else {
      style.overflow = prevOverflow || "";
    }
    return () => {
      style.overflow = prevOverflow || "";
    };
  }, [locked]);
}

export default useScrollLock;

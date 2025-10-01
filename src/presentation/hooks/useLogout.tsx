import { useState, useCallback } from "react";
import { getAuth, signOut } from "firebase/auth";

import storeZustand from "../../Components/zustand";

export function useLogout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  //const logoutLocal = storeZustand((s) => s.logoutLocal);

  const logout = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const auth = getAuth();
      await signOut(auth);
      //logoutLocal();
    } catch (e: unknown) {
      setError(e as string);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  return { logout, loading, error };
}

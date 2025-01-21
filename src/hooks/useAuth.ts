import { currentUser } from "@/services/auth.service";
import { useUserStore } from "@/stores/useUserStore";
import { useEffect } from "react";

export const useAuth = () => {
  const { setUser, user } = useUserStore();
  useEffect(() => {
    const getUser = async () => {
      const result = await currentUser();
      if (result instanceof Error) {
        setUser(null);
      } else {
        setUser(result);
      }
    };
    user === undefined && getUser();
  }, [setUser]);

  return { user };
};

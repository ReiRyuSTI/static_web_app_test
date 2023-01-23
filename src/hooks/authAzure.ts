import { useMsal } from "@azure/msal-react";
import { useCallback } from "react";
import { loginRequest } from "../auth/config";
import { AccountInfo } from "@azure/msal-browser";

export const useAuthAzure = () => {
  const { instance, accounts } = useMsal();

  const loginAzure = useCallback(() => {
    instance.loginRedirect(loginRequest);
  }, [instance]);

  const logoutAzure = useCallback(() => {
    instance.logout();
  }, [instance]);

  type AccountCheckToData = {
    check: boolean;
    data?: AccountInfo;
  };
  const checkAuth = useCallback((): AccountCheckToData => {
    if (accounts.length > 0) {
      const account: AccountInfo = accounts[0];
      return {
        check: true,
        data: account,
      };
    } else {
      return { check: false };
    }
  }, [accounts]);

  return { loginAzure, logoutAzure, checkAuth };
};

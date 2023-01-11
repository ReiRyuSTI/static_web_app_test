import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "28319d5b-868d-4b24-b3f4-54f6eebb6c36",
    authority:
      "https://ryuevidenttest.b2clogin.com/ryuevidenttest.onmicrosoft.com/b2c_1_react_susi",
    knownAuthorities: ["ryuevidenttest.b2clogin.com"],
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
};

export const loginRequest = {
  scopes: ["openid", "offline_access"],
};

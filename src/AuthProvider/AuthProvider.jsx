import React, { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const user = { displayName: "Rahim Saleh" };

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

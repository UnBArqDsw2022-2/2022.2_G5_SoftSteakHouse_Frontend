import React, { useContext } from "react";
import { AuthContext } from "../provider/authProvider";

export function useAuth() {
  const context = useContext(AuthContext);

  if(!context) return new Error("Error context");

  return context;
}
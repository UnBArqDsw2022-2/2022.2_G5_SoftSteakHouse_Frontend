import { createContext } from "react";
import { api } from "../hooks/useFetch";
import { usePost } from "../hooks/usePost";

export interface AuthResult {
  refresh: string,
  access: string
}

export interface LoginUser {
  username: string,
  password: string
}

interface AuthContextData {
  login: (user : LoginUser) => Promise<void>
}

interface AuthProviderData {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider(props: AuthProviderData) {
  async function login(user: LoginUser) {
    if(!user) return;
        const {data, error} = usePost<AuthResult>("/token/", user);
        if(!data || error) return;

        localStorage.setItem("accessToken", data?.access);
        localStorage.setItem("refreshToken", data?.refresh);

        api.defaults.headers.common['token'] = data?.access;

  };

  return (
    <AuthContext.Provider value={{login}}>
      {props.children}
    </AuthContext.Provider>
  );
}
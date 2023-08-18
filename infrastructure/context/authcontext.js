import React, { useState, useEffect } from "react";
import { AuthService } from "../service/auth";
import * as SecureStore from "expo-secure-store";

export const AuthContext = React.createContext({ email: "", password: "" });

export default AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const stayLoggedIn = async () => {
    setIsLoading(true);

    const email = await SecureStore.getItemAsync("email");
    const password = await SecureStore.getItemAsync("password");
    console.warn(email, password);
    if (email && password) {
      AuthService.Login(JSON.parse(email), JSON.parse(password))
        .then((res) => res.json())
        .then((json) => {
          console.error(json);
          if (json.response?.loginData) {
            setUser(json.response.loginData);
            setToken(json.response.token);
            setIsLoggedIn(true);
          }
        })
        .catch(() => Alert.alert("Something went wrong"))
        .finally(() => setIsLoading(false));
    }
  };

  const logOut = async () => {
    await SecureStore.deleteItemAsync("email");
    await SecureStore.deleteItemAsync("password");
    console.warn("merahab");

    setIsLoggedIn(false);
  };
  useEffect(() => {
    stayLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, token, isLoggedIn, logOut, setIsLoggedIn, isLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

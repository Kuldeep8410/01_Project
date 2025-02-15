import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../ContextApi/FisrtContext";

const LoginButton = () => {
  const { loading, setLoading, SendDataSignLogin } = useContext(AppContext);
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  console.log("hi login se")

  // Function to initiate Google login
  // const handleGoogleLogin = async () => {
  //   await loginWithRedirect();
  // };

  console.log("user data",user);

  // Send user data to backend after authentication
  useEffect(() => {
    if (isAuthenticated && user) {
      const sendUserData = async () => {
        try {
          const response = await SendDataSignLogin("google-login", user);
          console.log("Response for saving Google user:", response);
        } catch (error) {
          console.error("Error sending user data:", error);
        }
      };

      sendUserData();
    }
  }, [isAuthenticated, user, SendDataSignLogin]);

  return <button onClick={() => loginWithRedirect()}>Log In with Google</button>;
};

export default LoginButton;

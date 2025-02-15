import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { AppContext } from "../ContextApi/FisrtContext";

const LogoutButton = () => {

  const { loading, setLoading, SendDataSignLogin } = useContext(AppContext);
  
  const { logout, user } = useAuth0();
  console.log("user data",user)
  console.log("data of logout", useAuth0());
  
  let userObject

  if(user){
      userObject = {
      username : user.name,
      email : user.email,
      image : user.picture,
      nickname : user.nickname,
      user_varified : user.email_verified,
    }
  }

  console.log("new object",userObject)

  const sendUserData = async () => {
    try {
      const response = await SendDataSignLogin("signup", userObject);
      console.log("Response for saving Google user:", response);
    } catch (error) {
      console.error("Error sending user data:", error);
    }
  };

  sendUserData();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
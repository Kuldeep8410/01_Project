import { useContext, useState } from "react";
import Design from "./Design";
import Normaluser from "./NormalUserForm";
import Adminuser from "./AdminSignup";

import { AppContext } from "../ContextApi/FisrtContext";
import HashLoader from "react-spinners/HashLoader";

function Signup() {
  const [istrue, setTrue] = useState(false);
  const [active, setactive] = useState(true);
  const [isTrue, setIsTrue] = useState(true); // Track active user type

  const { loading, setLoading } = useContext(AppContext);

  function isAdmin() {
    setTrue(!istrue);
  }

  return (
    <div className="bg-amber-900">
      <Design />
      {loading ? (
        <HashLoader />
      ) : (
        <div className="flex flex-col justify-center content-center items-center p-1 m-3 w-[400px] bg-blue-600/75 text-blue-50 gap-2">
          {/* Buttons with active state styling */}
          <div>
            <button
              className={`border-2 px-2 rounded-md h-10 m-2 transition-all 
              ${
                isTrue ? "bg-green-400 text-white font-bold" : "bg-amber-700/90"
              }`}
              onClick={() => setIsTrue(true)}
            >
              Admin-user
            </button>

            <button
              className={`border-2 px-2 rounded-md h-10 m-2 transition-all 
              ${
                !isTrue
                  ? "bg-green-400 text-white font-bold"
                  : "bg-amber-700/90"
              }`}
              onClick={() => setIsTrue(false)}
            >
              Normal-user
            </button>
          </div>

          {/* Apply effect on this div when button is clicked */}
          <div
            className={`w-auto justify-center content-center items-center h-auto 
              ${isTrue ? "bg-black text-white" : "bg-gray-900 text-gray-200"}`}
          >
            {isTrue ? <Adminuser /> : <Normaluser />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;

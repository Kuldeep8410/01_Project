import { useState } from "react";

function Adminuser() {
  const [NormaluserData, setNormalUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
    contact: "",
    gender: "",
    role: "Admin-user", 
  });

 
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNormalUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handling form submission
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Your form data saved successfully", NormaluserData);
  };

  return (
    <div>
      <form className="Admin-form" onSubmit={submitHandler}>
        <label htmlFor="name">Admin Name</label>
        <input
          type="text"
          id="name"
          name="username"
          value={NormaluserData.username}
          onChange={changeHandler}
          required
        />

        <label htmlFor="email">Amdin Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={NormaluserData.email}
          onChange={changeHandler}
          required
        />

        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          name="password"
          value={NormaluserData.password}
          onChange={changeHandler}
          required
        />

        <label htmlFor="con-pass">Confirm Password</label>
        <input
          type="password"
          id="con-pass"
          name="confirmpass"
          value={NormaluserData.confirmpass}
          onChange={changeHandler}
          required
        />

        <label htmlFor="gen">Gender</label>
        <input
          type="text"
          id="gen"
          name="gender"
          value={NormaluserData.gender}
          onChange={changeHandler}
        />

        <label htmlFor="con">Contact</label>
        <input
          type="number"
          id="con"
          name="contact"
          value={NormaluserData.contact}
          onChange={changeHandler}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Adminuser;

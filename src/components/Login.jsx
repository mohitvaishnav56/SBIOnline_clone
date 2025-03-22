import React from "react";
import Footer from "./Home/Footer";
import LoginForm from "./Login/LoginForm";
import RightPanel from "./Login/RightPanel";



function Login() {
  return (
    <>
      <div className="w-full mt-20  flex">
        <LoginForm />
        <RightPanel/>
      </div>
      <Footer />
    </>
  );
}

export default Login;

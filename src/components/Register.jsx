import React from "react";
import Footer from "./Home/Footer";
import RegisterForm from "./Register/RegisterForm";
import BenefitsAndTestimonial from "./Register/BenefitsAndTestimonial";

function Register() {
  return (
    <>
      <div className="w-full md:min-h-screen mt-20  flex">
        <RegisterForm />
        <BenefitsAndTestimonial/>
      </div>
      <Footer />
    </>
  );
}

export default Register;

import React from "react";

// Icon declaration
import appleIcon from "../assets/apple.svg";
import arrowLeftIcon from "../assets/arrow-left.svg";
import emailIcon from "../assets/email.svg";
import googleIcon from "../assets/google.svg";
import passwordIcon from "../assets/password.svg";

export default function Component() {
  // Common input container styles
  const inputContainerStyles =
    "flex items-center bg-gray-200 rounded-full px-4 py-2 mb-4";

  // Common button styles
  const buttonStyles =
    "w-full flex justify-center items-center py-3 rounded-full mb-4";

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header Back Button */}
      <div className="p-4 flex items-center">
        <img src={arrowLeftIcon} alt="Back" className="h-6 w-6" />
      </div>

      {/* Welcome Section */}
      <div className="px-4 mt-4">
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-sm text-[#7D7F88]">
          Log In to your Placoo account to explore your dream place to live
          across the whole world!
        </p>
      </div>

      {/* Input Fields */}
      <div className="px-4 mt-6">
        {customInput("Username", emailIcon, "ericangelo1503@gmail.com")}
        {customInput("Password", passwordIcon, "", "password")}
      </div>

      {/* Log In Button */}
      <div className="px-4 mt-6">
        {customButton(
          "Log in",
          "bg-gradient-to-br from-indigo-400 to-indigo-600 text-white",
          buttonStyles
        )}
      </div>

      {/* Forgot Password Link */}
      <a
        href="#"
        className="text-sm text-zinc-500 text-center mt-4 cursor-pointer"
      >
        Forgot password?
      </a>

      <div className="relative my-4 flex items-center">
        <div className="flex-grow border-t border-[#ebe8f6]"></div>
        <span className="text-xs font-semibold text-[#9e91da] bg-[#f3f0ff] mx-4 px-2 rounded-full">
          OR
        </span>
        <div className="flex-grow border-t border-[#ebe8f6]"></div>
      </div>

      <div className="flex flex-col items-center px-4 mt-6">
        {customButton(
          "Sign in with Apple",
          "bg-gray-800 text-white",
          buttonStyles,
          appleIcon
        )}
        {customButton(
          "Sign in with Google",
          "bg-white text-gray-600 border border-gray-400",
          buttonStyles,
          googleIcon
        )}
      </div>
    </div>
  );

  // Function to generic input fields
  function customInput(label, icon, placeholder, type = "text") {
    return (
      <div className="mb-4" key={label}>
        <label className="flex flex-col space-y-2">
          <span className="text-[#1a1e25]">{label}</span>
          <div className={inputContainerStyles}>
            <img src={icon} alt="" className="h-6 w-6" />
            <input
              type={type}
              placeholder={placeholder}
              className="flex-1 text-[#1A1E25] bg-gray-200 outline-none ml-2 py-2"
            />
          </div>
        </label>
      </div>
    );
  }

  // Function to generic button
  function customButton(
    label,
    buttonClass,
    additionalStyles = "",
    icon = null
  ) {
    return (
      <button className={`${additionalStyles} ${buttonClass}`} key={label}>
        {icon && <img src={icon} alt={label} className="h-6 w-6 mr-2" />}
        {label}
      </button>
    );
  }
}

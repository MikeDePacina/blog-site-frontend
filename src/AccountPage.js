import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const AccountPage = () => {
  return (
    <div className="container">
      <h1>Sign in</h1>
      <LoginForm />
    </div>
  );
};

export default AccountPage;

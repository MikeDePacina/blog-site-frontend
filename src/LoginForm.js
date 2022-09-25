import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submit = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <div className="container mt-5">
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Username
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Password
        </span>
        <input
          type="password"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary mx-3"
        onClick={() => submit()}
      >
        Log in
      </button>
      <Link to="/signup">
        <button type="button" className="btn btn-secondary ms-4">
          Create Account
        </button>
      </Link>
    </div>
  );
};

export default LoginForm;

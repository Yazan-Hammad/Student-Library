import React, { useState } from "react";
import "../css/ResetPasswordPage.css";
import useBackend from "../hooks/use-backend";

function ResetPasswordPage() {
  const { makeRequest } = useBackend();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

	const [phase2, setPhase2] = useState(false);

  const submitEmail = () => {
    makeRequest(
      "post",
      "http://127.0.0.1:5000/api/v1/users/forgotPassword",
      "please take the key and paste it",
      (data = { email }),
      (headers = {}),
      (todo = () => {setPhase2(true);})
    );
  };

  const submitCode = () => {
    makeRequest(
      "post",
      "http://127.0.0.1:5000/api/v1/users/forgotPassword",
      "Success",
      (data = { email }),
      (headers = {}),
      (todo = () => {setPhase2(true);})
    );
  };

  return (
    <div className="reset-box">
      <form action="" method="post">
        {!phase2 && (
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
          />
        )}
        {phase2 && (
          <input
            type="text"
            onChange={(e) => setCode(e.target.value)}
            name="code"
            placeholder="Email"
          />
        )}
        <input
          type="submit"
          onClick={phase2 ? submitCode : submitEmail}
        ></input>
      </form>
    </div>
  );
}

export default ResetPasswordPage;

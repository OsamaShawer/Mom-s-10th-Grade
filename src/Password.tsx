// import { Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, type ChangeEvent } from "react";
import API_BASE_URL from "./config/api";
import { securityCode } from "./data/staticData";

function PasswordComponent() {
  const [data, setData] = useState({ security: "" });
  const [wrong, setWrong] = useState(false);
  const transfer = useNavigate();
  console.log();
  function change(element: ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [element.target.name]: element.target.value });
    console.log(data);
  }
  async function click() {
    setWrong(false);

    // For production, use static validation since backend isn't deployed yet
    if (import.meta.env.PROD) {
      if (data.security === securityCode) {
        sessionStorage.setItem("code", data.security);
        transfer("/videos");
      } else {
        setWrong(true);
      }
      return;
    }

    // For development, use backend API
    const response = await fetch(`${API_BASE_URL}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const dataBackend = await response.json();
    if (response.status === 200) {
      sessionStorage.setItem("code", data.security);
      transfer("/videos");
    } else {
      setWrong(true);
    }
  }
  return (
    <>
      <div className="flex flex-col items-center paper p-5! absolute top-[50%] left-[50%] -translate-[50%]">
        <h1 className="text-xl text-red-600 font-bold text-center">
          Security Code
        </h1>
        <input
          onChange={change}
          name="security"
          placeholder="Password"
          type="text"
          className="mt-[30px]! outline-none p-3! rounded-lg border-[#dddddd] border-[2px]"
        />
        <br />
        <h1
          style={{
            display: wrong ? "block" : "none",
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Wrong Password
        </h1>
        <button
          onClick={click}
          className="rounded-lg bg-amber-500 pt-[10px]! pb-[10px]! pl-[20px]! pr-[20px]!"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default PasswordComponent;

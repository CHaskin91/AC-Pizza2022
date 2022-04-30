import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import {registerUser} from "../actions/userActions";
export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const dispatch = useDispatch()
  function signup() {
    if (password !== cpassword) {
      alert("Password did not match.");
    } else {
      const user = { name, email, password };
    }
    console.log(user);
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          <h2 className="text-center m-3" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input
              type="text"
              placeholder="username"
              className="form-control"
              value={name}
              required
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              required
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button onClick={signup} className="btn mt-3">
              Sign-up.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(form);

      localStorage.setItem("token", res.token);

      navigate("/dashboard"); //  redirect
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <MDBContainer className="gradient-form">
      <MDBRow>

        {/* LEFT SIDE */}
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">Login</h4>
            </div>

            <MDBInput
  wrapperClass="mb-4"
  label="Email"
  type="email"
  onChange={(e) =>
    setForm({ ...form, email: e.target.value })
  }
/>

            <MDBInput
  wrapperClass="mb-4"
  label="Password"
  type="password"
  onChange={(e) =>
    setForm({ ...form, password: e.target.value })
  }
/>

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleLogin}>
                Sign in
              </MDBBtn>

              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>

              <MDBBtn outline onClick={() => navigate("/register")}>
                Register
              </MDBBtn>
            </div>

          </div>
        </MDBCol>

        {/* RIGHT SIDE */}
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Welcome Back!</h4>
              <p className="small mb-0">
                Login to manage your tasks efficiently 🚀
              </p>
            </div>
          </div>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
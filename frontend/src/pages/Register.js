import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await register(form);
      alert("Registered successfully!");
      navigate("/"); // 🔥 back to login
    } catch (err) {
      setError("Registration failed (email may exist)");
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center align-items-center min-vh-100">

        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="px-4">

              <h3 className="fw-bold mb-4 text-center">Register</h3>

              <MDBInput
                className="mb-2"
                label="Name"
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <MDBInput
                className="mb-2"
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <MDBInput
                className="mb-2"
                label="Password"
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />

              <MDBBtn className="w-100 mb-3" onClick={handleSubmit}>
                Register
              </MDBBtn>

              {error && <p style={{ color: "red" }}>{error}</p>}

              <p className="text-center">
                Already have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Login
                </span>
              </p>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
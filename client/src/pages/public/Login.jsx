import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/user/userAction";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // admin@gmail.com
  // 123
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginUser(values));
    },
  });

  const { loading, error, info } = useSelector((state) => state.user);
  useEffect(() => {
    info && info.role === "user" && navigate("/user");
    info && info.role === "admin" && navigate("/admin");
  }, [info]);
if(loading){
   return <>
       <div className="d-flex justify-content-center">
       <div class="spinner-border text-success"></div>
       </div>
   </>
}
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            {error && <div class="alert alert-danger">{error}</div>}
            <div className="card mt-5">
              <div className="card-header">Login</div>
              <form onSubmit={formik.handleSubmit}>
                <div className="card-body">
                  <div>
                    <label for="email" className="form-label">
                      First Email
                    </label>
                    <input
                      value={formik.email}
                      onChange={formik.handleChange}
                      name="email"
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.email && formik.touched.email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      type="text"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="mt-2">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      value={formik.password}
                      onChange={formik.handleChange}
                      name="password"
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.password && formik.touched.password
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      type="password"
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Login
                  </button>
                  <p className="text-center mt-3">
                    Dont Have Account?{" "}
                    <Link to="/register">Create Account</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDA4NTFjODE0YjQzN2U5ZGUyMWQ5MzkiLCJpYXQiOjE2NzgyNjc5ODUsImV4cCI6MTY3ODI2ODAxNX0.7mI9Yo4oRHCQDbjjUyhQ36IDoFvVPFfelv3PEIHMbtc

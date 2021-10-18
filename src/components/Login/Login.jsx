import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../allHooks/useAuth";

const Login = () => {
  const { SignInUsingGoogle } = useAuth();
  return (
    <div>
      <div className="container overflow-hidden">
        <div className="row gx-4">
          <div className="col-lg-6">
            <div>
              <img
                className="img-fluid"
                src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3 mt-5">
              <div className="mb-3 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-3 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-3 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button className="w-50 mx-auto my-3 btn btn-dark" type="submit">
                  Log in
                </button>
              </div>
            </div>
            <div className="text-center">
              <p>
                <small>
                  Don't have account?{" "}
                  <Link to="/register">create an account</Link>
                </small>
              </p>
              <button className="btn btn-dark" onClick={SignInUsingGoogle}>
                <img src="https://image.flaticon.com/icons/png/512/281/281764.png" width="30px" className="m-1 float-start" alt="" />
                 Sign in with google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

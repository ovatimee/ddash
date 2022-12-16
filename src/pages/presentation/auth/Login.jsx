import React, { useCallback, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import PageWrapper from "../../../layout/PageWrapper/PageWrapper";
import Page from "../../../layout/Page/Page";
// import div ,{ CardBody } from "bootstrap";
// import {label} from "bootstrap";
// import input from "../../../components/bootstrap/forms/Input";
// import button from "../../../components/bootstrap/Button";
import Logo from "../../../components/Logo";
import useDarkMode from "../../../hooks/useDarkMode";
import { useFormik } from "formik";
import AuthContext from "../../../contexts/authContext";
import USERS, {
  getUserDataWithUsername,
} from "../../../common/data/userDummyData";
// import Spinner from "../../../components/bootstrap/Spinner";
// import Alert from "../../../components/bootstrap/Alert";
const LoginHeader = ({ isNewUser }) => {
  if (isNewUser) {
    return (
      <>
        <div className="text-center h1 fw-bold mt-5">Create Account,</div>
        <div className="text-center h4 text-muted mb-5">
          Sign up to get started!
        </div>
      </>
    );
  }
  return (
    <>
      <div className="text-center h1 fw-bold mt-5">Welcome,</div>
      <div className="text-center h4 text-muted mb-5">Sign in to continue!</div>
    </>
  );
};
const Login = ({ isSignUp }) => {
  const { setUser } = useContext(AuthContext);
  const { darkModeStatus } = useDarkMode();
  const [signInPassword, setSignInPassword] = useState(false);
  const [singUpStatus, setSingUpStatus] = useState(!!isSignUp);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/"), [navigate]);
  const usernameCheck = (username) => {
    return !!getUserDataWithUsername(username);
  };
  const passwordCheck = (username, password) => {
    return getUserDataWithUsername(username).password === password;
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      loginUsername: USERS.JOHN.username,
      loginPassword: USERS.JOHN.password,
    },
    validate: (values) => {
      const errors = {};
      if (!values.loginUsername) {
        errors.loginUsername = "Required";
      }
      if (!values.loginPassword) {
        errors.loginPassword = "Required";
      }
      return errors;
    },
    validateOnChange: false,
    onSubmit: (values) => {
      if (usernameCheck(values.loginUsername)) {
        if (passwordCheck(values.loginUsername, values.loginPassword)) {
          if (setUser) {
            setUser(values.loginUsername);
          }
          handleOnClick();
        } else {
          formik.setFieldError(
            "loginPassword",
            "Username and password do not match."
          );
        }
      }
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (
        !Object.keys(USERS).find(
          (f) => USERS[f].username.toString() === formik.values.loginUsername
        )
      ) {
        formik.setFieldError(
          "loginUsername",
          "No such user found in the system."
        );
      } else {
        setSignInPassword(true);
      }
      setIsLoading(false);
    }, 1000);
  };
  return (
    <PageWrapper
      isProtected={false}
      title={singUpStatus ? "Sign Up" : "Login"}
      // className={classNames({
      //   "bg-warning": !singUpStatus,
      //   "bg-info": singUpStatus,
      // })}
    >
      <Page className="p-0">
        <section class="h-full gradient-form bg-gray-200 md:h-screen">
          <div className="container py-12 px-6 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="xl:w-10/12">
                <div className="block bg-white shadow-lg rounded-lg">
                  <div className="lg:flex lg:flex-wrap g-0">
                    <div className="lg:w-6/12 px-4 md:px-0">
                      <div className="md:p-12 md:mx-6">
                        <div className="text-center">
                          <img
                            className="mx-auto w-48"
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            alt="logo"
                          />
                          <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                            Managment Dashboard
                          </h4>
                        </div>
                        <form>
                          {singUpStatus ? (
                            <>
                              <div className="col-12">
                                <label
                                  id="signup-email"
                                  isFloating
                                  label="Your email"
                                >
                                  <input type="email" autoComplete="email" />
                                </label>
                              </div>
                              <div className="col-12">
                                <label
                                  id="signup-name"
                                  isFloating
                                  label="Your name"
                                >
                                  <input autoComplete="given-name" />
                                </label>
                              </div>
                              <div className="col-12">
                                <label
                                  id="signup-surname"
                                  isFloating
                                  label="Your surname"
                                >
                                  <input autoComplete="family-name" />
                                </label>
                              </div>
                              <div className="col-12">
                                <label
                                  id="signup-password"
                                  isFloating
                                  label="Password"
                                >
                                  <input
                                    type="password"
                                    autoComplete="password"
                                  />
                                </label>
                              </div>
                              <div className="col-12">
                                <button
                                  color="info"
                                  className="w-100 py-3"
                                  onClick={handleOnClick}
                                >
                                  Sign Up
                                </button>
                              </div>
                            </>
                          ) : (
                            <>
                              <p className="mb-4">
                                Please login to your account
                              </p>
                              <div className="mb-4">
                                <input
                                  type="text"
                                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  // id="exampleFormControlInput1"
                                  autoComplete="username"
                                  value={formik.values.loginUsername}
                                  isTouched={formik.touched.loginUsername}
                                  invalidFeedback={formik.errors.loginUsername}
                                  isValid={formik.isValid}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  onFocus={() => {
                                    formik.setErrors({});
                                  }}
                                />
                              </div>
                              <div className="mb-4">
                                <input
                                  type="password"
                                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  // id="exampleFormControlInput1"
                                  // placeholder="Password"
                                  autoComplete="current-password"
                                  value={formik.values.loginPassword}
                                  isTouched={formik.touched.loginPassword}
                                  invalidFeedback={formik.errors.loginPassword}
                                  validFeedback="Looks good!"
                                  isValid={formik.isValid}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </div>
                              <div className="text-center pt-1 mb-12 pb-1">
                                <button
                                  className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                  type="button"
                                  onClick={formik.handleSubmit}
                                  style={{
                                    background:
                                      "linear-gradient( to right,#ee7724,#d8363a,#dd3675,#b44593)",
                                  }}
                                >
                                  Log in
                                </button>
                                <a className="text-gray-500" href="#!">
                                  Forgot password?
                                </a>
                              </div>
                              <div className="flex items-center justify-between pb-6">
                                <p className="mb-0 mr-2">
                                  Don't have an account?
                                </p>
                                <button
                                  type="button"
                                  className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                  onClick={() => {
                                    setSignInPassword(false);
                                    setSingUpStatus(!singUpStatus);
                                  }}
                                >
                                  Singup
                                </button>
                              </div>
                            </>
                          )}
                        </form>
                      </div>
                    </div>
                    <div
                      className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                      style={{
                        background:
                          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                      }}
                    >
                      <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                        <h4 className="text-xl font-semibold mb-6">
                          We are more than just a company
                        </h4>
                        <p className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Page>
    </PageWrapper>
  );
};
Login.propTypes = {
  isSignUp: PropTypes.bool,
};
Login.defaultProps = {
  isSignUp: false,
};
export default Login;

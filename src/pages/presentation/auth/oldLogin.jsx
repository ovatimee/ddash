<div className="row h-100 align-items-center justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-8 shadow-3d-container">
            <div className="shadow-3d-dark" data-tour="login-page">
              <divBody>
                {/* <div className="text-center my-5"> */}
                {/*   <Link */}
                {/*     to="/" */}
                {/*     className={classNames( */}
                {/*       "text-decoration-none  fw-bold display-2", */}
                {/*       { */}
                {/*         "text-dark": !darkModeStatus, */}
                {/*         "text-light": darkModeStatus, */}
                {/*       } */}
                {/*     )} */}
                {/*   > */}
                {/*     <Logo width={200} /> */}
                {/*   </Link> */}
                {/* </div> */}
                {/* <div */}
                {/*   className={classNames("rounded-3", { */}
                {/*     "bg-l10-dark": !darkModeStatus, */}
                {/*     "bg-dark": darkModeStatus, */}
                {/*   })} */}
                {/* > */}
                {/*   <div className="row row-cols-2 g-3 pb-3 px-3 mt-0"> */}
                {/*     <div className="col"> */}
                {/*       <button */}
                {/*         color={darkModeStatus ? "light" : "dark"} */}
                {/*         isLight={singUpStatus} */}
                {/*         className="rounded-1 w-100" */}
                {/*         size="lg" */}
                {/*         onClick={() => { */}
                {/*           setSignInPassword(false); */}
                {/*           setSingUpStatus(!singUpStatus); */}
                {/*         }} */}
                {/*       > */}
                {/*         Login */}
                {/*       </button> */}
                {/*     </div> */}
                {/*     <div className="col"> */}
                {/*       <button */}
                {/*         color={darkModeStatus ? "light" : "dark"} */}
                {/*         isLight={!singUpStatus} */}
                {/*         className="rounded-1 w-100" */}
                {/*         size="lg" */}
                {/*         onClick={() => { */}
                {/*           setSignInPassword(false); */}
                {/*           setSingUpStatus(!singUpStatus); */}
                {/*         }} */}
                {/*       > */}
                {/*         Sign Up */}
                {/*       </button> */}
                {/*     </div> */}
                {/*   </div> */}
                {/* </div> */}
                <LoginHeader isNewUser={singUpStatus} />
                {/* <Alert isLight icon="Lock" isDismissible> */}
                {/* <div className="row"> */}
                {/*   <div className="col-12"> */}
                {/*     <strong>Username:</strong> {USERS.JOHN.username} */}
                {/*   </div> */}
                {/*   <div className="col-12"> */}
                {/*     <strong>Password:</strong> {USERS.JOHN.password} */}
                {/*   </div> */}
                {/* </div> */}
                {/* </Alert> */}
                <form className="row g-4">
                  {singUpStatus ? (
                    <>
                      <div className="col-12">
                        <label id="signup-email" isFloating label="Your email">
                          <input type="email" autoComplete="email" />
                        </label>
                      </div>
                      <div className="col-12">
                        <label id="signup-name" isFloating label="Your name">
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
                        <label id="signup-password" isFloating label="Password">
                          <input type="password" autoComplete="password" />
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
                      <div className="col-12">
                        <label
                          id="loginUsername"
                          isFloating
                          label="Your email or username"
                          className={classNames({
                            "d-none": signInPassword,
                          })}
                        >
                          <input
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
                        </label>
                        {signInPassword && (
                          <div className="text-center h4 mb-3 fw-bold">
                            Hi, {formik.values.loginUsername}.
                          </div>
                        )}
                        <label
                          id="loginPassword"
                          isFloating
                          label="Password"
                          className={classNames({
                            "d-none": !signInPassword,
                          })}
                        >
                          <input
                            type="password"
                            autoComplete="current-password"
                            value={formik.values.loginPassword}
                            isTouched={formik.touched.loginPassword}
                            invalidFeedback={formik.errors.loginPassword}
                            validFeedback="Looks good!"
                            isValid={formik.isValid}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </label>
                      </div>
                      <div className="col-12">
                        {!signInPassword ? (
                          <button
                            color="warning"
                            className="w-100 py-3"
                            isDisable={!formik.values.loginUsername}
                            onClick={handleContinue}
                          >
                            {isLoading && "loading"}
                            {/* <Spinner isSmall inbutton isGrow /> */}
                            Continue
                          </button>
                        ) : (
                          <button
                            color="warning"
                            className="w-100 py-3"
                            onClick={formik.handleSubmit}
                          >
                            Login
                          </button>
                        )}
                      </div>
                    </>
                  )}
                  {/* BEGIN :: Social Login */}
                  {!signInPassword && (
                    <>
                      <div className="col-12 mt-3 text-center text-muted">
                        OR
                      </div>
                      <div className="col-12 mt-3">
                        <button
                          isOutline
                          color={darkModeStatus ? "light" : "dark"}
                          className={classNames("w-100 py-3", {
                            "border-light": !darkModeStatus,
                            "border-dark": darkModeStatus,
                          })}
                          icon="CustomApple"
                          onClick={handleOnClick}
                        >
                          Sign in with Apple
                        </button>
                      </div>
                      <div className="col-12">
                        <button
                          isOutline
                          color={darkModeStatus ? "light" : "dark"}
                          className={classNames("w-100 py-3", {
                            "border-light": !darkModeStatus,
                            "border-dark": darkModeStatus,
                          })}
                          icon="CustomGoogle"
                          onClick={handleOnClick}
                        >
                          Continue with Google
                        </button>
                      </div>
                    </>
                  )}
                  {/* END :: Social Login */}
                </form>
              </divBody>
            </div>
            <div className="text-center">
              <a
                href="/"
                className={classNames("text-decoration-none me-3", {
                  "link-light": singUpStatus,
                  "link-dark": !singUpStatus,
                })}
              >
                Privacy policy
              </a>
              <a
                href="/"
                className={classNames("link-light text-decoration-none", {
                  "link-light": singUpStatus,
                  "link-dark": !singUpStatus,
                })}
              >
                Terms of use
              </a>
            </div>
          </div>
        </div>

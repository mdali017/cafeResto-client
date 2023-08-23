import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  //   React simple captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password, 11);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Auththentication Error",
          "Please submit validate Email and Password",
          "error"
        );
      });
  };

  const handleValidateCaptcha = (event) => {
    const user_captcha_value = event.target.value;
    // console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      //   console.log(user_captcha_value);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>CafeResto | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  // ref={captchaRef}
                  onBlur={handleValidateCaptcha}
                  placeholder="Type The Captcha Above"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
            <label className="mx-auto pb-5">
              <div to="/signup" className="label-text-alt link link-hover">
                New Hare Awesome Restuarant? Please
                <Link
                  to="/signup"
                  className="text-blue-500 font-semibold text-[14px] ml-2"
                >
                  Sign Up
                </Link>
              </div>
            </label>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

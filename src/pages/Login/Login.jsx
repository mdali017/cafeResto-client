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
import { FaBeer, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import img from "../../assets/others/authentication1.png";

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
      <div className="bg-[url(../pages/assets/authentication/authentication.png)]  mx-auto drop-shadow-2xl border-8 ">
        <div className="md:flex justify-center items-center md:p-20">
          <div className="w-full md:w-1/2">
            <img className="md:h-[800px]" src={img} alt="" />
          </div>
          <div className="md:w-1/2 m-4 md:ml-8">
            <form onSubmit={handleLogin} className="md:p-10 border">
              <h1 className="text-center font-bold text-xl">Login</h1>
              <div className="form-control ">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="rounded  "
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-control ">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="rounded   "
                  placeholder="********"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  placeholder="Type The Captcha Above"
                  className="input input-bordered md:w-80"
                />
              </div>
              <div className="form-control my-3">
                <button
                  type="submit"
                  disabled={disabled}
                  className="border btn btn-primary bg-gray-600 text-white py-3 rounded-lg"
                >
                  Sign In
                </button>
              </div>
              <div>
                <h3 className="text-center">
                  New Here?
                  <Link to="/signup" className="text-blue-600">
                    Create An Account
                  </Link>
                  <br /> <span>or Sign In With</span>
                </h3>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <SocialLogin></SocialLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

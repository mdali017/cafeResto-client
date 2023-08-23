import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("user profile info updated");
            const saveUser = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
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

  return (
    <>
      <Helmet>
        <title>CafeResto | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Full Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700 font-semibold">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700 font-semibold">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-700 font-semibold">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-900">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-900">minimum 6 character</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-900">maxmimum 20 character</p>
                )}

                {errors.password?.type === "maxLength" && (
                  <p className="text-red-900">
                    Password must be less than 20 characterrequired
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-900">
                    Password must have one uppercase one lowercase one number
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <label className="mx-auto pb-5">
              <div className="label-text-alt link link-hover">
                Already Have An Account? Please
                <Link
                  to="/login"
                  className="text-blue-500 font-semibold text-[14px] ml-2"
                >
                  Log In
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

export default SignUp;

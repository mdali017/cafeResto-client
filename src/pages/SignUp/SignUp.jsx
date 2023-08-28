import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import img from "../../assets/others/authentication2.png";

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
            fetch("https://awesome-restuarent-server.vercel.app/users", {
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
      <div className="bg-[url(../pages/assets/authentication/authentication.png)]  mx-auto drop-shadow-2xl border-8 ">
        <div className="md:flex justify-center items-center md:p-20">
          <div className="w-full md:w-1/2">
            <img className="md:h-[800px]" src={img} alt="" />
          </div>
          <div className="md:w-1/2 m-4 md:ml-8">
            <form onSubmit={handleSubmit(onSubmit)} className="md:p-10 border">
              <h1 className="text-center font-bold text-xl">Sign Up</h1>
              <div className="form-control ">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  className="rounded  "
                  placeholder="Enter Your Full Name"
                />
                {errors.name && (
                  <span className="text-red-700 font-semibold">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control ">
                <label>Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                  className="rounded  "
                  placeholder="Photo URL"
                />
                {errors.photoURL && (
                  <span className="text-red-700 font-semibold">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control ">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <span className="text-red-700 font-semibold">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control ">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
                  })}
                  placeholder="Password"
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
              </div>
              <div className="form-control my-3">
                <button
                  type="submit"
                  className="border btn btn-primary bg-gray-600 text-white py-3 rounded-lg"
                >
                  Sign Up
                </button>
              </div>
              <div>
                <h3 className="text-center">
                  Already Have An Account?
                  <Link to="/login" className="text-blue-600">
                    Please Login
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

export default SignUp;

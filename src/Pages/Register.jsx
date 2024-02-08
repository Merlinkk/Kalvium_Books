import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import ErrorIcon from "@mui/icons-material/Error";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Form() {
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();
  // const history = useHistory();

  const togglePassword = () => {
    setPasswordShown(passwordShown ? false : true);
  }

  const [CpasswordShown, setCPasswordShown] = useState(false);

  const toggleCPassword = () => {
    setCPasswordShown(CpasswordShown ? false : true);
  }

  const [formData, setFormData] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const [submit, setSubmit] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    setSubmit(true);
    setFormData(data);
    navigate('/user', {state : { Data : data }});
    // history.push('/user', { Data : data });
  };

  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Navbar back={true} pathname={location.pathname} />
      <br />

      <div className="flex w-full justify-center">
      <div className="flex mt-40 justify-center items-center my-10 flex-col md:text-2xl text-lg
        md:w-fit h-full bg-gray-100 bg-opacity-10 rounded-lg shadow-lg md:p-10 p-5
      ">
        <h1 className="md:text-4xl text-2xl my-10 font-bold bg-gradient-to-r from-purple-300 to-pink-600 bg-clip-text text-transparent ">Registration Form</h1>

          {/* {submit ? (
            <span className="text-lime-500 border-lime-500 border text-center p-2 px-4 my-10">
              Registration successful!
            </span>
          ) : null} */}

        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="my-5 relative">
            <input
              className={`border-gray-300 border-2 p-2 rounded text-base md:w-96 text-left outline-none ${
                errors.firstName ? "border-red-500" : null
              } `}
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name" })}
            />
            <div className="absolute right-1 top-1">
              <PersonOutlineIcon />
            </div>
            {errors.firstName ? (
              <p className="text-sm m-0 p-0 ml-1 italic text-red-500">
                <ErrorIcon className="text-red-400" />
                {errors.firstName?.message}
              </p>
            ) : null}
          </div>

          <div className="my-5 relative">
            <input
              className={`border-gray-300 border-2 p-2 rounded text-base md:w-96 text-left outline-none ${
                errors.email ? "border-red-500" : null
              } `}
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email  ",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <div className="absolute right-1 top-1">
              <EmailIcon />
            </div>

            {errors.email ? (
              <p className="text-sm m-0 p-0 italic ml-1 text-red-500">
                <ErrorIcon className="text-red-400" />
                {errors.email?.message}
              </p>
            ) : null}
          </div>

          <div className="my-5 relative">
            <input
              className={`border-gray-300 border-2 p-2 rounded text-base md:w-96 text-left outline-none ${
                errors.password ? "border-red-500" : null
              } `}
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                pattern:{
                  value: /^(?=.*[@$!%?&])/,
                  message: "Password should contain a special character",
              },
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password cannot be more than 20 characters",
                },
              })}
            />
            <div className="absolute cursor-pointer right-1 top-1">
              {passwordShown ? <VisibilityOffIcon onClick={togglePassword} /> : <VisibilityIcon onClick={togglePassword} /> }
            </div>

            {errors.password ? (
              <p className="text-sm m-0  italic p-0 ml-1 text-red-500">
                <ErrorIcon className="text-red-400" />
                {errors.password?.message}
              </p>
            ) : null}
          </div>

          <div className="my-5 relative">

            <input
              className={`border-gray-300 border-2 p-2 rounded text-base md:w-96 text-left outline-none ${
                errors.confirmPassword ? "border-red-500" : null
              } `}
              type={CpasswordShown ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />

            <div className="absolute cursor-pointer right-1 top-1">
              {passwordShown ? <VisibilityOffIcon onClick={toggleCPassword} /> : <VisibilityIcon onClick={toggleCPassword} /> }
            </div>

            {errors.confirmPassword ? (
              <p className="text-sm m-0 italic p-0 ml-1 text-red-500">
                <ErrorIcon className="text-red-400" />
                {errors.confirmPassword?.message}
              </p>
            ) : null}
          </div>

          <button className="my-10 bg-gradient-to-tr from-pink-50 to-pink-100 hover:from-pink-300 hover:to-pink-700 hover:text-white text-red-700 transition  p-3 rounded-xl" id="submit">
            Submit
          </button>

        </form>
      </div>
      </div>
    </div>
  );
}

export default Form;

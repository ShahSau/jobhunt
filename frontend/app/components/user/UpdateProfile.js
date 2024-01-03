'use client'
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import Loader from "../Loader";

// import { toast } from "react-toastify";

const preset_key =process.env.PRESET_KEY
const cloud_name = process.env.CLOUD_NAME

const UpdateProfile = ({ access_token }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [cv, setCv] = useState("");
  const [processLoading, setProcessLoading] = useState(false);

  const router = useRouter();

  const {
    updated,
    loading,
    error,
    user,
    clearErrors,
    updateProfile,
    setUpdated,
  } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
      setGithub(user.github);
      setLinkedin(user.linkedin);
      setCv(user.cv);
    }

    if (error) {
    //   toast.error(error);
      clearErrors();
    }

    if (updated) {
      setUpdated(false);
      router.push("/myprofile");
    }
  }, [error, user, updated]);

  const submitHandler = (e) => {
    e.preventDefault();
    updateProfile({ firstName, lastName, email, password, github, linkedin, cv }, access_token);

    // add a toast message here
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);
    setProcessLoading(true)
    axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    ).then((response)=>{
      if (response.status === 200) {
        setCv(response.data.url)
        setProcessLoading(false)
      }
    }).catch((error)=>{
      setProcessLoading(false)
      console.log(error)
    })
  };

  return (
    <>
    {loading && <Loader />}
    {!loading && <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Update your profile
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
            First Name
          </label>
          <div className="mt-2">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
            Last Name
          </label>
          <div className="mt-2">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>


        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              pattern="\S+@\S+\.\S+"
              value={email}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              // required
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="github" className="block text-sm font-medium leading-6 text-gray-900">
            Github link
          </label>
          <div className="mt-2">
            <input
              id="github"
              name="github"
              type="text"
              placeholder="Enter Github link"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium leading-6 text-gray-900">
            Linkedin link
          </label>
          <div className="mt-2">
            <input
              id="linkedin"
              name="linkedin"
              type="text"
              placeholder="Enter linkedin link"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="cv" className="block text-sm font-medium leading-6 text-gray-900">
            Upload CV
          </label>
          <div className="mt-2">
            <input
              id="cv"
              name="cv"
              type="file"
              placeholder="Upload CV"
              onChange={onChange}
              accept="application/pdf"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={processLoading}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
      </form>

      
    </div>
    </div>
    }
    </>
  );
};

export default UpdateProfile;
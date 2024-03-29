'use client'
import React,{ useState, useContext, useEffect }  from 'react'
import AuthContext from "../../../context/AuthContext";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useTheme } from '../../../context/ThemeProvider';

const Register = () => {
    const { theme } = useTheme();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, error, isAuthenticated, register, clearErrors } = useContext(AuthContext);
    const router = useRouter();

    const submitHandler = (e) => {
        e.preventDefault();
        register({ firstName, lastName, email, password });
      };

    useEffect(() => {

        if (isAuthenticated && !loading) {
        router.push("/");
        }
    }, [isAuthenticated, error, loading]);
  return (
    <div className={`flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${theme === 'light'? 'bg-gray-300 text-gray-900':'bg-gray-800 text-gray-100'}`}>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        Sign up for an account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium leading-6">
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
              className="block w-full text-gray-600 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium leading-6">
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
              className="block w-full text-gray-600 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>


        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6">
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
              className="block w-full text-gray-600 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              className="block w-full text-gray-600 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm">
        Have a account?{' '}
        <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Sign in
        </Link>
      </p>
    </div>
    </div>
  )
}

export default Register
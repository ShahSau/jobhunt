'use client'

import Login from '../components/auth/Login'
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext"; 
import { useRouter } from 'next/navigation';

const page = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  return (
    <div>
      {user ? router.push("/") : 
        <Login />
      }
    </div>
  )
}

export default page
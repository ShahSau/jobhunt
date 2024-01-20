'use client'
import React, {useEffect, useState} from 'react'
import UpdateProfile from '../components/user/UpdateProfile'
import { isAuthenticatedUser } from '../utils/isAuthenticated'
import { useCookies } from 'react-cookie';
import axios from "axios";
import Loader from '../components/Loader';
import {toast} from 'react-hot-toast'
const page = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['access']);
    const[isAuthenticated,setIsAuthenticated] = useState(false)
    const[loading,setLoading] = useState(false)
    const access_token = cookies.access;
    
    useEffect(() => {
        setLoading(true)
        if(access_token){
            axios.post(
                `${process.env.API_URL}/api/token/verify/`,
                {
                  token: access_token,
                }
              ).then((response)=>{
                if (response.status === 200) {
                    toast.success('Logged in successfully!')
                    setIsAuthenticated(true)
                    setLoading(false)
                }
                else{
                    setIsAuthenticated(false)
                    setLoading(false)
                    toast.error('Please login to continue!')
                }
              }).catch((error)=>{
                setIsAuthenticated(false)
              })
        }
    }, [access_token])
    return (
        <>
            {loading && <Loader />}
            {isAuthenticated && <UpdateProfile access_token={access_token}/>}
        </>
    )

}

export default page
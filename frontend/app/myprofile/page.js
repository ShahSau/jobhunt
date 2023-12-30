'use client'
import React, {useEffect, useState} from 'react'
import UpdateProfile from '../components/user/UpdateProfile'
import { isAuthenticatedUser } from '../utils/isAuthenticated'
import { useCookies } from 'react-cookie';
import axios from "axios";
const page = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['access']);
    const[isAuthenticated,setIsAuthenticated] = useState(false)
    const access_token = cookies.access;
    
    useEffect(() => {
        if(access_token){
            axios.post(
                `${process.env.API_URL}/api/token/verify/`,
                {
                  token: access_token,
                }
              ).then((response)=>{
                if (response.status === 200) {
                    setIsAuthenticated(true)
                }
                else{
                    setIsAuthenticated(false)
                }
              }).catch((error)=>{
                setIsAuthenticated(false)
              })
        }
    }, [access_token])
    return (
        <>
            {isAuthenticated && <UpdateProfile access_token={access_token}/>}
        </>
    )

}

export default page
"use client"

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { useParams } from 'next/navigation'
import UpdateJob from '../../../../../components/UpdateJob'
import Loader from '../../../../../components/Loader';
import {toast} from 'react-hot-toast'
const page = () => {
    const [cookies] = useCookies(['access']);
    const [job, setJob] = useState([])
    const accessToken = cookies.access
    const { id } = useParams()
    const [loading, setLoading] = useState(false);
    

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
      };

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.API_URL}/api/jobs/${id}/`, config)
        .then(res => {
            setJob(res.data.job)
            setLoading(false)
        })
        .catch(err => {
            toast.error(err.message)
            setLoading(false)
        })

    }, [])

    return (
        <>
        {loading && <Loader />}
        {!loading && job.length !==0 && <UpdateJob job={job} id={id} accessToken={accessToken} />}
        </>
        
    )
}

export default page
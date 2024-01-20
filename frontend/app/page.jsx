"use client"

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link'

import JobHunt from './components/JobHunt';
import Loader from './components/Loader'
import JobsSide from './components/JobsSide';
import {toast} from 'react-hot-toast'


const Home = ()=> {
  const [loadingJob, setLoadingJob] = useState(true)
  const [hottestJob, setHottestJob] = useState([])
  const [fresherJob, setFresherJob] = useState([])
  const [newestJob, setNewestJob] = useState([])
  const [remoteJob, setRemoteJob] = useState([])

  useEffect( () => {
    axios.get(`${process.env.API_URL}/api/hottestjobs/`)
      .then(res => {
        setHottestJob(res.data.jobs)
      })
      .catch(err => {
        toast.error(err.message)
      })

    axios.get(`${process.env.API_URL}/api/newestjobs/`)
      .then(res => {
        setNewestJob(res.data.jobs)
      })
      .catch(err => {
        toast.error(err.message)
      })

    axios.get(`${process.env.API_URL}/api/remotejobs/`)
      .then(res => {
        setRemoteJob(res.data.jobs)
      })
      .catch(err => {
        toast.error(err.message)
      })

    axios.get(`${process.env.API_URL}/api/fresherjobs`)
      .then(res => {
        setFresherJob(res.data.jobs)
        setLoadingJob(false)
      })
      .catch(err => {
        toast.error(err.message)
      })
  }
  , [])
  return (
    <>
    {loadingJob ? <Loader /> : 
      <>
      <JobHunt name="Hottest Jobs" data={hottestJob} />
      <JobsSide recentJob={newestJob} remoteJob={remoteJob}/>
      <JobHunt name="Fresher Jobs" data={fresherJob} />
      </>
    }
    </>
  )
}

export default Home;
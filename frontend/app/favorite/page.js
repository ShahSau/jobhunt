"use client"

import React, {useEffect, useState} from 'react'
import axios from 'axios'

const page = () => {
    const [jobs, setJobs] = useState([])

    const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA0NTMyODAxLCJpYXQiOjE3MDMyMzY4MDEsImp0aSI6IjE0NmRiYzg5MTk1MDRlMWU4MjU0YjgzOGZlYjBlZDg2IiwidXNlcl9pZCI6Mn0._6lsfTSFU-MmBc1TiaVphLI53qF8Mw3gjZaxHuFLwyI` }
    };

    useEffect(() => {
        axios.get(`${process.env.API_URL}/api/me/jobs/favorites/`, config)
        .then(res => {
            setJobs(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    , [])
    console.log(jobs)
  return (

      <div className="bg-white">
      <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Favorite Jobs</h1>
          <p className="mt-2 text-sm text-gray-500">
            List of all your favorite jobs.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>

          <div className="space-y-16 sm:space-y-24">
            <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                  <p>You have saved {jobs.length} jobs as your favorite jobs</p>
            </div>
            {jobs.map((jobs,index) => (
              <div key={index}>
                <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0 bg-gray-100">
                  <div className="-my-6 divide-y divide-gray-700 sm:-my-10">
                      <div key={jobs.job.id} className="flex py-6 sm:py-10">
                        <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                          <div className="lg:flex-1">
                            <div className="sm:flex">
                              <div>
                                <h4 className="font-medium text-gray-900">{jobs.job.title}</h4>
                                <p className="mt-2 hidden text-sm text-gray-500 sm:block">{jobs.job.description}</p>
                              </div>
                            </div>
                            <div className="mt-2 flex text-sm font-medium sm:mt-4">
                              <a href={`/jobs/${jobs.job.id}`} className="text-indigo-600 hover:text-indigo-500">
                                View job details
                              </a>
                              <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                                <a href={`jobs/${jobs.job.id}/favorite/`} className="text-indigo-600 hover:text-indigo-500">
                                  Remove from favorites
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
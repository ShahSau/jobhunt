"use client"

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import Link from 'next/link';

const page = () => {
  const [jobs, setJobs] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies(['access']);
    const accessToken = cookies.access
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
    };

    useEffect(() => {
        axios.get(`${process.env.API_URL}/api/me/jobs/applied/`, config)
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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Applied Jobs</h1>
            <p className="mt-2 text-sm text-gray-500">
            List of all your applied jobs.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="sr-only">Applied jobs</h2>

            <div className="space-y-16 sm:space-y-24">
              <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                  <p>You have saved {jobs.length} jobs as your applied jobs</p>
              </div>

              <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                              Title
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Salary
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Education
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Experience
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Applied On
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {jobs.map((job) => (
                            <tr key={job.job.id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                {job.job.title}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${job.job.salary}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.job.education}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.job.experience}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(job.appliedAt).toDateString()}</td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <Link href={`/jobs/${job.job.id}`} className="text-indigo-600 hover:text-indigo-900">
                                  Details<span className="sr-only">, {job.job.title}</span>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
  )
}

export default page
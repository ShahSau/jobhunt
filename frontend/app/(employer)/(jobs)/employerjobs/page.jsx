"use client"

import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import { isAuthenticatedUser } from '../../../utils/isAuthenticated';
import { useRouter, usePathname } from 'next/navigation';
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaUser, FaEye } from "react-icons/fa";
import JobContext from '../../../../context/JobContext';
import { FaPlus } from "react-icons/fa";
import Loader from '../../../components/Loader';


const page = () => {
  const [cookies] = useCookies(['access']);
  const [jobs, setJobs] = useState([])
  const accessToken = cookies.access
  const user = isAuthenticatedUser(accessToken)
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { clearErrors, error, deleted, deleteJob, setDeleted } =
    useContext(JobContext);

  if(!user) {
    router.push('/login')
  }

  const config = {
    headers: { Authorization: `Bearer ${accessToken}` }
  };

  useEffect(() => {
    setLoading(true)
    axios.get(`${process.env.API_URL}/api/me/jobs/`, config)
    .then(res => {
        setJobs(res.data)
        setLoading(false)
    })
    .catch(err => {
        console.log(err)
        setLoading(false)
    })
  }
  , [deleted])

  const handleDelete = (id) => {
    deleteJob(id, accessToken)
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && <div className="bg-white">
        <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
            <div className="px-4 sm:px-0">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Advertized Jobs</h1>
              <p className="mt-2 text-sm text-gray-500">
              List of all the jobs you have advertized.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 mt-4">
              <div className="col-start-1 col-end-3"></div>
              <div className="col-end-7 col-span-2">
                <button
                    type="button"
                    onClick={() => router.push('/employerjobs/newjob')}
                    className="w-32 relative inline-flex items-center gap-x-1.5 rounded-full bg-indigo-500 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                     <FaPlus className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                      New Job
                </button>
              </div>
            </div>

          <div className="mt-16">
            <h2 className="sr-only">Advertized jobs</h2>

            <div className="space-y-16 sm:space-y-24">
              <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                  <p>You have advertized {jobs.length} jobs</p>
              </div>

              <div className="px-4 sm:px-6 lg:px-8">
                
                <div className="mt-8 flow-root">

                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                              ID
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Title
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Salary
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Created At
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                              <span className="sr-only">Details</span>
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                              <span className="sr-only">Applicant</span>
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                              <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                              <span className="sr-only">Delete</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {jobs.map((job) => (
                            <tr key={job.id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                {job.id}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.title}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${job.salary}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(job.createdAt).toDateString()}</td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex flex-row">
                                <Link href={`/jobs/${job.id}`} className="text-indigo-500 hover:text-indigo-900 m-2">
                                  <FaEye /><span className="sr-only">, {job.title}</span>
                                </Link>
                                <Link href={`/employerjobs/candidates/${job.id}`} className="text-indigo-500 hover:text-indigo-900 m-2">
                                  <FaUser /><span className="sr-only">, {job.title}</span>
                                </Link>
                                <Link href={`/employerjobs/jobs/${job.id}`} className="text-indigo-500 hover:text-indigo-900 m-2">
                                  <FaPencil /><span className="sr-only">, {job.title}</span>
                                </Link>
                                <button onClick={()=>handleDelete(job.id)}  className="text-indigo-500 hover:text-indigo-900 m-2">
                                  <MdDelete /><span className="sr-only">, {job.title}</span>
                                </button>
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
      </div>}
    </>
  )
}

export default page
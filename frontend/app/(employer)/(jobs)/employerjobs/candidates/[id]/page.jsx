"use client"

import axios from 'axios'
import moment from 'moment';
import { useCookies } from 'react-cookie';
import { useParams, useRouter } from 'next/navigation'
import React, {useState, useEffect, useContext, use} from 'react'
import Link from 'next/link';
import Loader from '../../../../../components/Loader';
import { useTheme } from '../../../../../../context/ThemeProvider';
import { FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaUser, FaEye } from "react-icons/fa";

const page = () => {
    const { theme } = useTheme();
    const [cookies] = useCookies(['access']);
    const accessToken = cookies.access
    const { id } = useParams()
    const [data, setData] = useState([])
    const [allusers, setAllusers] = useState([])
    const [loading, setLoading] = useState(true);

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
      };

    useEffect(() => {
        axios.get(`${process.env.API_URL}/api/all`, config)
        .then((res) => {
            setAllusers(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    , [])

    useEffect(() => {
        //setLoading(true)
        axios.get(`${process.env.API_URL}/api/job/${id}/candidates/`, config)
        .then((res) => {
            res.data.map((item) => {
                allusers.map((user) => {
                    if (item.user === user.id) {
                        item.candidate = user
                    }
                })
            })
            setData(res.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
        })

    }
    , [allusers])


    console.log(data)
  return (
    <>
    {loading && data.length ==0 && <Loader />}
    {data.length == 0 && !loading && <div className={`${theme === 'light'? 'bg-gray-300 text-black':'bg-gray-800 text-white'}`}>
        <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
          <div className="px-4 sm:px-0">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Candidates</h1>
            <p className="mt-2 text-sm text-gray-500">
            List of candidates who applied to this job.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="sr-only">Candidates</h2>

            <div className="space-y-16 sm:space-y-24">
              <div className={`${theme === 'light'? 'bg-gray-50':'bg-gray-500'} px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8`}>
                  <p>No one applied to this job yet!</p>
              </div>
            </div>
          </div>
        </div>
    </div>}                         
    {!loading && data.length!==0 && <div className={`${theme === 'light'? 'bg-gray-300 text-black':'bg-gray-800 text-white'}`}>
        <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
            <div className="px-4 sm:px-0">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Candidates</h1>
              <p className="mt-2 text-sm text-gray-500">
              List of all the candidates who applied to this job.
              </p>
            </div>

          <div className="mt-16">
            <h2 className="sr-only">Candidates</h2>

            <div className="space-y-16 sm:space-y-24">
            <div className={`${theme === 'light'? 'bg-gray-50':'bg-gray-500'} px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8`}>
                  <p>{data.length} candidates applied to this job</p>
            </div>

              <div className="px-4 sm:px-6 lg:px-8">
                
                <div className="mt-8 flow-root">

                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className={`min-w-full divide-y ${theme === 'light'? 'divide-gray-800':'divide-gray-300'}`}>
                        <thead>
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0">
                              Name
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                              Email
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                              Applied on
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                              Github
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                              Linkedin
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                              <span className="sr-only">CV</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${theme === 'light'? 'divide-gray-800':'divide-gray-300'}`}>
                          {data.map((person) => (
                            <tr key={person.user}>
                              <td className={`whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0 ${theme === 'light'? 'text-gray-900' : 'text-gray-100'}`}>
                                {person.candidate?.first_name}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.candidate?.email}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(person.appliedAt).toDateString()}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><a target='_blank' href={person.candidate?.github}>{person.candidate?.github}</a></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><a target='_blank' href={person.candidate?.linkedin}>{person.candidate?.linkedin}</a></td>
                              {person.candidate?.cv && <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <a target="_blank" href={person.candidate?.cv} className="text-indigo-600 hover:text-indigo-900">
                                  cv<span className="sr-only">,{person.candidate?.cv}</span>
                                </a>
                              </td>}
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
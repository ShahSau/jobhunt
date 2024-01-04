"use client"

import axios from 'axios'
import moment from 'moment';
import { useCookies } from 'react-cookie';
import { useParams, useRouter } from 'next/navigation'
import React, {useState, useEffect, useContext, use} from 'react'
import Link from 'next/link';

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]

const page = () => {
    const [cookies] = useCookies(['access']);
    const accessToken = cookies.access
    const router = useRouter()
    const { id } = useParams()
    const [data, setData] = useState([])
    const [allusers, setAllusers] = useState([])

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
        })
        .catch((err) => {
            console.log(err)
        })

    }
    , [allusers])


    
  return (
    <div className="px-4 sm:px-6 lg:px-8 h-screen">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Applied on
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Github
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Linkedin
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">CV</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((person) => (
                  <tr key={person.user}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {person.candidate?.first_name}
                    </td>
                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{person.candidate?.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(person.appliedAt).toDateString()}</td>
                    {person.candidate?.github && <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><Link href={person.candidate?.github}>{person.candidate?.github}</Link></td>}
                    {person.candidate?.linkedin && <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><Link href={person.candidate?.linkedin}>{person.candidate?.linkedin}</Link></td>}
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
  )
}

export default page
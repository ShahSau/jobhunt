'use client'

import React, { Fragment, useState,useEffect } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { HiXMark } from "react-icons/hi2";
import { HiOutlinePlus,HiChevronDown } from "react-icons/hi";
import axios from 'axios';
import SearchComp from './SearchComp'
import Loader from '../components/Loader'
import { useSearchParams } from 'next/navigation'
import Pagination from 'react-js-pagination'

const filters = [
  {
    id: 'jobtype',
    name: 'Job Type',
    options: [
      { value: 'Permanent', label: 'Permanent' },
      { value: 'Temporary', label: 'Temporary' },
      { value: 'Internship', label: 'Internship' },
      {value: 'No Filter', label: 'No Filter'}
    ],
  },
  {
    id: 'education',
    name: 'Education',
    options: [
      { value: 'Bachelors', label: 'Bachelors' },
      { value: 'Masters', label: 'Masters' },
      { value: 'Phd', label: 'Phd' },
      {value: 'No Filter', label: 'No Filter'}
    ],
  },
  {
    id: 'experience',
    name: 'Experience',
    options: [
      { value: 'No Experience', label: 'No Experience' },
      { value: '1 Years', label: '1 Year' },
      { value: '2 Years', label: '2 Years' },
      { value: '3 Years above', label: '3 or more Years' },
      {value: 'No Filter', label: 'No Filter'}
    ],
  },
  {
    id: 'salary',
    name: 'Salary',
    options: [
      { value: '1-50000', label: '1-50000' },
      { value: '50000-100000', label: '50000-100000' },
      { value: '100000-200000', label: '100000-200000' },
      { value: '300000-500000', label: '300000-500000' },
      { value: '500000-1000000', label: '500000-1000000' },
      {value: 'No Filter', label: 'No Filter'}
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const page = () => {
    const [jobs, setJobs] = useState([])
    const [loadingJob, setLoadingJob] = useState(true)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [activePage, setActivePage] = useState(1)
    const [count, setCount] = useState(0)
    const [responsePerPage, setResponsePerPage] = useState(0)
    const [keyword, setKeyword] = useState('')
    const [location, setLocation] = useState('')

    const searchParams = useSearchParams()
    const jobTypeFromUrl = searchParams.get('jobType')
    const educationFromUrl = searchParams.get('education')
    const experienceFromUrl = searchParams.get('experience')
    const miniSalaryFromUrl = searchParams.get('min_salary')
    const maxSalaryFromUrl = searchParams.get('max_salary')
    
    let salaryFromUrl = null
    
    if(miniSalaryFromUrl != null && maxSalaryFromUrl != null){
      salaryFromUrl = `${miniSalaryFromUrl}-${maxSalaryFromUrl}`
    }
    
    
    const [filterData, setFilterData] = useState({
      jobtype: jobTypeFromUrl != null ? jobTypeFromUrl : 'No Filter',
      education:educationFromUrl != null ? educationFromUrl :  'No Filter',
      experience:experienceFromUrl != null ? experienceFromUrl : 'No Filter',
      salary: salaryFromUrl != null ? salaryFromUrl : 'No Filter'
    })

    

    const setFilterDataHandler = (id,value) => {
      setFilterData({
        ...filterData,
        [id]: value
      })
    }

    const queryStr=`?jobType=${filterData.jobtype}&education=${filterData.education}&experience=${filterData.experience}&min_salary=${filterData.salary.split('-')[0]}&max_salary=${filterData.salary.split('-')[1]}&keyword=${keyword}&location=${location}`
    

    const formSubmitHandler = () => {
      const values = Object.keys(filterData)
      values.forEach((value) => {
        if(filterData[value] === 'No Filter'){
          filterData[value] = ''
        }
      })
      
      fetchJobs()
      
    }

    const fetchJobs = async () => {
      axios.get(`${process.env.API_URL}/api/jobs/${queryStr}`)
      .then(response => {
        setJobs(response.data.jobs)
        setCount(response.data.count)
        
        setResponsePerPage(response.data.resPerPage)
        setLoadingJob(false)
        console.log(responsePerPage,count)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <div className="bg-">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <HiXMark className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4" 
                    onSubmit={(e) => {
                      e.preventDefault()
                      formSubmitHandler()
                      setMobileFiltersOpen(false)
                    }}
                  >
                    <div className='bg-indigo-500 flex items-center mb-4'>
                      <input
                        type="keyword"
                        name="keyword"
                        id="keyword"
                        className="block w-full  rounded-md shadow-sm focus:ring-indigo-500 text-gray-900"
                        placeholder="keyword"
                        onChange={(e) => {
                          setKeyword(e.target.value)
                        }}
                      />
                  </div>
                  <div className='bg-indigo-500 flex items-center'>
                      <input
                          type="location"
                          name="location"
                          id="location"
                          className="block w-full  rounded-md shadow-sm focus:ring-indigo-500 text-gray-900"
                          placeholder="location"
                          onChange={(e) => {
                            setLocation(e.target.value)
                          }}
                        />
                  </div>
                    {filters.map((section) => (
                      <Disclosure as="div" key={section.name} className="border-t border-gray-200 pb-4 pt-4">
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex h-7 items-center">
                                  <HiChevronDown
                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={section.id}
                                      name={section.name}
                                      type="radio"
                                      defaultChecked={filterData[section.id] === option.value}
                                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      onChange={(e) => {
                                        setFilterDataHandler(section.id, option.value)
                                      }}
                                    />
                                    <label
                                      htmlFor={`${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                    {console.log(section.id)}
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                    <button>
                      <span className="ml-4 text-sm font-medium px-4 bg-indigo-500 p-2 rounded-md text-white">Apply Filters</span>
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Jobs</h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the best opportunities for you in the market.
            </p>
          </div>

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-indigo-500">Filters</span>
                <HiOutlinePlus className="ml-1 h-5 w-5 flex-shrink-0 text-indigo-500" aria-hidden="true" />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200"
                  onSubmit={(e) => {
                    e.preventDefault()
                    formSubmitHandler()
                  }}
                >
                  <div className='bg-indigo-500 flex items-center'>
                  <input
                      type="keyword"
                      name="keyword"
                      id="keyword"
                      className="block w-full  rounded-md shadow-sm focus:ring-indigo-500 text-gray-900"
                      placeholder="keyword"
                      onChange={(e) => {
                        setKeyword(e.target.value)
                      }}
                    />
                  </div>
                  <div className='bg-indigo-500 flex items-center'>
                  <input
                      type="location"
                      name="location"
                      id="location"
                      className="block w-full  rounded-md shadow-sm focus:ring-indigo-500 text-gray-900"
                      placeholder="location"
                      onChange={(e) => {
                        setLocation(e.target.value)
                      }}
                    />
                  </div>
                  
                  {filters.map((section, sectionIdx) => (
                    <div key={section.name} className={sectionIdx === 0 ? 'pt-10' : 'pt-10'}>
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                id={section.id}
                                name={section.name}
                                type="radio"
                                defaultChecked={filterData[section.id] === option.value}
                                className="h-4 w-4 border-gray-300  text-indigo-600 focus:ring-indigo-600"
                                onChange={(e) => {
                                  setFilterDataHandler(section.id, option.value)
                                }}
                              />
                              <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                  <button>
                    <span className="text-sm font-medium bg-indigo-500 p-2 rounded-md text-white">Apply Filters</span>
                  </button>
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                {loadingJob ? <Loader /> :
                jobs.length === 0 ? <h1 className="text-2xl font-bold tracking-tight text-gray-900">No Jobs Found, Please change filters and try again!</h1> :
                <SearchComp jobs={jobs} />
                }
                
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default page
"use client";

import { FaXmark } from "react-icons/fa6";
import { FaBars, FaPlus } from "react-icons/fa";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from "next/link";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext"; 
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "../../context/ThemeProvider";

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Search', href: '/search', current: false },
    { name: 'Stats', href: '/stats', current: false },
]
              
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
  }
              
const Header =()=> {

  const { user, loading, logout } = useContext(AuthContext);
  const { theme } = useTheme();

  //console.log(user)
  return (
    <Disclosure as="nav" className={`${theme === 'light' ?'bg-gray-200 text-black' : 'bg-gray-900 text-white' }`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                  <Disclosure.Button className={`relative inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}`}>
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                        {open ? (
                          <FaXmark className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                          <FaBars className="block h-6 w-6" aria-hidden="true" />
                        )}
                  </Disclosure.Button>
              </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="sm:flex flex-shrink-0 items-center hidden ">
                    <p className="text-lg font-bold">Job Hunt</p>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            `${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}`,
                              'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <ThemeSwitch />
              
                  {/* Profile dropdown */}
                  {user && <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className={`relative flex rounded-md  text-md focus:outline-none ${theme === 'light'? 'hover:bg-gray-300' : 'hover:bg-gray-700'} p-2`}>
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <p>{user.first_name}</p>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/myprofile"
                              className={classNames(active ? 'bg-gray-300' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/applied"
                              className={classNames(active ? 'bg-gray-300' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Applied Jobs
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/favorite"
                              className={classNames(active ? 'bg-gray-300' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Favorite Jobs
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/employerjobs"
                              className={classNames(active ? 'bg-gray-300' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Current Jobs
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/"
                                onClick={logout}
                                className={classNames(active ? 'bg-gray-300' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Sign out
                              </Link>
                            )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>}
                  {!user && 
                  <div className="flex space-x-4">
                    <Link href="/login">
                      <span className={`rounded-md px-3 py-2 text-sm font-medium ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}`}>Login</span>
                    </Link>
                  </div>
                    }
                </div>
            </div>
          </div>
              
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <Disclosure.Button
                    key={item.name}
                      className={classNames(
                        `${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}`,
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
              

export default Header;
'use client';
import {
  createContext,
  useContext,
  useState,
} from 'react';

import { Dispatch, SetStateAction } from 'react';

const UserContext = createContext<{
  userSignedIn: boolean;
  setUserSignedIn: Dispatch<SetStateAction<boolean>>;
}>({
    userSignedIn: false,
    setUserSignedIn: () => {},
});

import { ReactNode } from 'react';

interface UserProviderProps {
  userSignedIn: boolean;
  children: ReactNode;
}

export const UserProvider = ({ userSignedIn: initialUserSignedIn, children }: UserProviderProps) => {
  const [userSignedIn, setUserSignedIn] = useState(initialUserSignedIn);

  return (
    <UserContext.Provider value={{ userSignedIn, setUserSignedIn }}>
      <div className={userSignedIn ? 'user-signed-in' : 'user-signed-out'}>{children}</div>
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
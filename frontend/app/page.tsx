'use client'
import { useEffect,useState } from "react";
import Header from "./components/Header";
import { useTheme } from "./providers/ThemeProvider";
import { decryptData } from "./utils/cryptoToken";
import { useUser } from './providers/AuthProvider'


const Home=()=> {
  const { theme } = useTheme();
  const [token, setToken] = useState<string | null>(null);

  const { userSignedIn } = useUser()
  console.log(userSignedIn,"DDDD")


  useEffect(() => {
    const tokenString = window.localStorage.getItem('token');
    const salt = process.env.NEXT_PUBLIC_SALT|| '';
    const token = tokenString ? decryptData(tokenString, salt) : null;
    setToken(token);
  }, []);



  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline text-red-800">
        Hello world!
      </h1>
    </>

  );
}

export default Home;

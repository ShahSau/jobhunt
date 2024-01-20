
'use client';
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import cookie from "cookie";
import { useRouter } from "next/navigation";
import { useCookies } from 'react-cookie';
import {toast} from 'react-hot-toast'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['access']);
  const [updated, setUpdated] = useState(null);
  const [uploaded, setUploaded] = useState(null);
  const router = useRouter();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (!user) {
      loadUser();
    }
  }, [user, cookies.access]);

  // Login user
  const login = async ({ username, password }) => {
    try {
      setLoading(true);

      const response = await axios.post(
        `${process.env.API_URL}/api/token/`,
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );


      if(response.status === 200 && response.statusText === "OK"){
        setCookie('access', response.data.access, { path: '/', maxAge: 60 * 60 * 24 * 15 });
      
        loadUser();
        setIsAuthenticated(true);
        setLoading(false);
        
        router.push("/");
      }
        
    } catch (error) {
      setLoading(false);
      toast.error("Invalid Credentials");
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Register user
  const register = async ({ firstName, lastName, email, password }) => {
    try {
      setLoading(true);

      const res = await axios.post(`${process.env.API_URL}/api/register/`, {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });

      if (res.data.message) {
        setLoading(false);
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.response);
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Load user
  const loadUser = async () => {
    
    const cookie = cookies.access || "";
    if (cookie =="") {
      return;
    }
    try{
      const res= await axios.get(`${process.env.API_URL}/api/me/`, {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      });
      
        setCookie('mee', res.data, { path: '/', maxAge: 60 * 60 * 24 * 15 });
        setUser(res.data);
        setIsAuthenticated(true);
        setLoading(false);
      
    }
    catch{
      setLoading(false);
      setIsAuthenticated(false);
      setUser(null);
      toast.error("Invalid Credentials");
      setError(
        error?.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Logout user
  const logout =() => {
    try {
      removeCookie('access');
      setUser(null);
      setIsAuthenticated(false);
      router.push("/login");
    } catch (error) {
      setLoading(false);
      setIsAuthenticated(false);
      setUser(null);
      toast.error("Something went wrong");
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Clear Errors
  const clearErrors = () => {
    setError(null);
  };

  // Update user
  const updateProfile = async (
    { firstName, lastName, email, password, cv, github, linkedin },
    access_token
  ) => {
    try {
      setLoading(true);

      const res = await axios.put(
        `${process.env.API_URL}/api/me/update/`,
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          cv,
          github,
          linkedin,
            
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (res.data) {
        toast.success("Profile Updated Successfully");
        setLoading(false);
        setUpdated(true);
        setUser(res.data);
      }
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Upload Resume
  const uploadResume = async (formData, access_token) => {
    try {
      setLoading(true);

      const res = await axios.put(
        `${process.env.API_URL}/api/upload/resume/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (res.data) {
        toast.success("Resume Uploaded Successfully");
        setLoading(false);
        setUploaded(true);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };
  

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        error,
        isAuthenticated,
        updateProfile,
        login,
        register,
        logout,
        clearErrors,
        uploadResume,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
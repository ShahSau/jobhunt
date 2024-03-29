import axios from "axios";
import { useState, useEffect, createContext } from "react";

import { useRouter } from "next/navigation";
import {toast} from 'react-hot-toast'
const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updated, setUpdated] = useState(null);
  const [applied, setApplied] = useState(false);
  const [stats, setStats] = useState(false);
  const [created, setCreated] = useState(null);
  const [deleted, setDeleted] = useState(null);

  const router = useRouter();

  // Apply to Job
  const applyToJob = async (id, access_token) => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.API_URL}/api/jobs/${id}/apply/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (res.data.applied === true) {
        toast.success("You have applied  to this job successfully");
        setLoading(false);
        setApplied(true);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response)
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Check job applied
  const checkJobApplied = async (id, access_token) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.API_URL}/api/jobs/${id}/check/`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      setLoading(false);
      setApplied(res.data);
    } catch (error) {
      setLoading(false);
      toast.error(error.response)
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Get topic stats
  const getTopicStats = async (topic) => {
    try {
      setLoading(true);

      const res = await axios.get(`${process.env.API_URL}/api/stats/${topic}/`);

      setLoading(false);
      setStats(res.data);
    } catch (error) {
      setLoading(false);
      toast.error(error.response)
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Create a new job
  const newJob = async (data, access_token) => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.API_URL}/api/jobs/new/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (res.data) {
        toast.success("Job Created Successfully");
        setLoading(false);
        setCreated(true);
      }
    } catch (error) {
      toast.error(error.response)
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Update job
  const updateJob = async (id, data, access_token) => {
    try {
      setLoading(true);

      const res = await axios.put(
        `${process.env.API_URL}/api/jobs/${id}/update/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (res.data) {
        toast.success("Job Updated Successfully");
        setLoading(false);
        setUpdated(true);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response)
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

   // Delete job
   const deleteJob = async (id, access_token) => {
    try {
      setLoading(true);

      const res = await axios.delete(
        `${process.env.API_URL}/api/jobs/${id}/delete/`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      toast.success("Job Deleted Successfully");
      setLoading(false);
      setDeleted(true);
    } catch (error) {
      setLoading(false);
      toast.error(error.response)
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

  return (
    <JobContext.Provider
      value={{
        loading,
        error,
        updated,
        applied,
        stats,
        created,
        deleted,
        newJob,
        updateJob,
        deleteJob,
        getTopicStats,
        applyToJob,
        setUpdated,
        checkJobApplied,
        clearErrors,
        setCreated,
        setDeleted
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
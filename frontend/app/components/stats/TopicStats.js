import React, { useState, useContext, useEffect } from "react";
import JobContext from '../../../context/JobContext'
import { useTheme } from "../../../context/ThemeProvider";

// import { toast } from "react-toastify";


const TopicStats = () => {
  const [topic, setTopic] = useState("");
  const { theme } = useTheme();

  const { getTopicStats, stats, clearErrors, error, loading } =
    useContext(JobContext);

  useEffect(() => {
    if (error) {
    //   toast.error(error);
      clearErrors();
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();

    getTopicStats(topic);
  };

  return (
    <> 
    <div className={`flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${theme === 'light'? 'bg-gray-300 text-black':'bg-gray-800 text-white'}`}>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        Get stats of a topic
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={submitHandler}>
        <div>
          <label htmlFor="topic" className="block text-sm font-medium leading-6">
            Topic Name
          </label>
          <div className="mt-2">
            <input
              id="topic"
              name="topic"
              type="text"
              placeholder="Enter Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
              className="text-black block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="text-white flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Stats
          </button>
        </div>
      </form>
      {stats && stats?.message  &&
        <div className="mt-6 text-center text-sm font-medium leading-6">
            <p className="text-red-500">{stats.message}</p>
        </div>
      }
    {
        stats && !stats?.message && 
        <>
            <p className="text-center text-sm font-medium leading-6">
            Please note that: These stats are collected from the jobs that
            are posted only on Jobhunt. Do not compare these stats with
            other sites.
            </p>
            <dl className="mx-auto grid grid-cols-1 gap-px">
                <div
                    key={stats.total_jobs}
                    className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 ${theme === 'light'? 'bg-gray-200 text-gray-500':'bg-gray-700 text-gray-400'} px-4 py-10 sm:px-6 xl:px-8`}
                >
                    <dt className="text-sm font-medium leading-6">Available Jobs</dt>
                    <dd className={`w-full flex-none text-3xl font-medium leading-10 tracking-tight ${theme === 'light' ? 'text-black': 'text-white'}`}>
                        {stats.total_jobs}
                    </dd>
                </div>
                <div
                    key={stats.avg_salary}
                    className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 ${theme === 'light'? 'bg-gray-200 text-gray-500':'bg-gray-700 text-gray-400'} px-4 py-10 sm:px-6 xl:px-8`}
                >
                    <dt className="text-sm font-medium leading-6 text-gray-500">Average Salary</dt>
                    <dd className={`w-full flex-none text-3xl font-medium leading-10 tracking-tight ${theme === 'light' ? 'text-black': 'text-white'}`}>
                        ${stats.avg_salary}
                    </dd>
                </div>
                <div
                    key={stats.min_salary}
                    className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 ${theme === 'light'? 'bg-gray-200 text-gray-500':'bg-gray-700 text-gray-400'} px-4 py-10 sm:px-6 xl:px-8`}
                >
                    <dt className="text-sm font-medium leading-6 text-gray-500">Minimum Salary</dt>
                    <dd className={`w-full flex-none text-3xl font-medium leading-10 tracking-tight ${theme === 'light' ? 'text-black': 'text-white'}`}>
                        ${stats.min_salary}
                    </dd>
                </div>
                <div
                    key={stats.max_salary}
                    className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 ${theme === 'light'? 'bg-gray-200 text-gray-500':'bg-gray-700 text-gray-400'} px-4 py-10 sm:px-6 xl:px-8`}
                >
                    <dt className="text-sm font-medium leading-6 text-gray-500">Maximum Salary</dt>
                    <dd className={`w-full flex-none text-3xl font-medium leading-10 tracking-tight ${theme === 'light' ? 'text-black': 'text-white'}`}>
                        ${stats.max_salary}
                    </dd>
                </div>
            </dl>
        </>
    }
    </div>
    </div>
    </>
  );
};

export default TopicStats;
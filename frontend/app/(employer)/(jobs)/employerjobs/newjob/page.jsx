"use client"
import React, {useEffect, useState, useContext} from 'react'
import { useCookies } from 'react-cookie';
import JobContext from '../../../../../context/JobContext';
import { useRouter } from 'next/navigation'
import { useTheme } from '../../../../../context/ThemeProvider';


const jobTypeOptions = ["Permanent", "Temporary", "Intership"];
const educationOptions = ["Bachelors", "Masters", "Phd"];
const industriesOptions = [
  "Business",
  "Information Technology",
  "Banking",
  "Education",
  "Telecommunication",
  "Others",
];
const experienceOptions = [
  "No Experience",
  "1 Years",
  "2 Years",
  "3 Year+",
];

const Page = () => {
    const { theme } = useTheme();
    const [cookies] = useCookies(['access']);
    const [job, setJob] = useState([])
    const accessToken = cookies.access
    
    const router = useRouter()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [jobType, setJobType] = useState("");
    const [education, setEducation] = useState("");
    const [industry, setIndustry] = useState("");
    const [experience, setExperience] = useState("");
    const [salary, setSalary] = useState("");
    const [positions, setPositions] = useState("");
    const [company, setCompany] = useState("");
    let [remote, setRemote] = useState("");

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };

    const { clearErrors, error, loading, created, newJob, setCreated } =
    useContext(JobContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      remote !== '' ? remote = true : remote = false;
      const job = {
          title,
          description,
          email,
          address,
          jobType,
          education,
          industry,
          experience,
          salary,
          positions,
          company,
          remote
      };
      newJob( job, accessToken);
   };
   useEffect(() => {
    if(created){
      setCreated(false);
      router.push("/employerjobs");
    }
  }, [created]);

  return (
    <form className={`${theme === 'light'? 'bg-gray-300 text-black':'bg-gray-800 text-white'} p-6`} onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className=" border-gray-900/10 pb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">New Job</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Create a new job.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6">
                Job Title
              </label>
              <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  type="text"
                  placeholder="Enter Job Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7">Job Details</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  pattern="\S+@\S+\.\S+"
                  title="Your email is invalid"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="address" className="block text-sm font-medium leading-6">
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="salary" className="block text-sm font-medium leading-6">
                Salary
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  placeholder="Enter Salary Range"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="company" className="block text-sm font-medium leading-6">
                Company Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="jobType" className="block text-sm font-medium leading-6">
                Job Type
              </label>
              <div className="mt-2">
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {jobTypeOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="education" className="block text-sm font-medium leading-6">
                Level of Education
              </label>
              <div className="mt-2">
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {educationOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="industry" className="block text-sm font-medium leading-6">
                Industry
              </label>
              <div className="mt-2">
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {industriesOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="experience" className="block text-sm font-medium leading-6">
                Level of Experience
              </label>
              <div className="mt-2">
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    {experienceOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="position" className="block text-sm font-medium leading-6">
                Number of Positions
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  placeholder="Enter No. of Positions"
                  value={positions}
                  onChange={(e) => setPositions(e.target.value)}
                  required
                  min={1}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="remote" className="block text-sm font-medium leading-6">
                Remote
              </label>
              <div className="mt-2">
                <input
                   id="remote"
                   name="remote"
                   type="checkbox"
                   checked={remote}
                   onChange={(e) => setRemote(e.target.checked)}
                   className="block w-4 rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default Page
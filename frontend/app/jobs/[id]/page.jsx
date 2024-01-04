"use client"

import axios from 'axios'
import moment from 'moment';
import { useParams, useRouter } from 'next/navigation'
import React, {useState, useEffect, useContext} from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Loader from '../../components/Loader';
import { IoLocationSharp } from "react-icons/io5";
import Map, {Marker,NavigationControl, GeolocateControl} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import NotFound from '../../not-found';
import { useCookies } from 'react-cookie';
import JobContext from '../../../context/JobContext';
import AuthContext from '../../../context/AuthContext';
import Link from 'next/link';


const page = () => {
    const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN
    const router = useRouter()
    const { id } = useParams()
    const [job, setJob] = useState({})
    const [candidates, setCandidates] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [cookies] = useCookies(['access']);
    const accessToken = cookies.access
    const [isFavourite, setIsFavourite] = useState(false)
    const [outOfDate, setOutOfDate] = useState(false)

    const { applyToJob, checkJobApplied, applied, clearErrors } =
    useContext(JobContext);
    const { user } = useContext(AuthContext);

    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
      };

    useEffect(() => {
        axios.get(`${process.env.API_URL}/api/jobs/${id}/`, config)
        .then(res => {
            setJob(res.data.job)
            setLoading(false)
            setCandidates(res.data.cabdidatesApplied)
        })
        .catch(err => {

            console.log(err)
            setError(true)
            setLoading(false)
        })

        checkJobApplied(id, accessToken)
        const d1 = moment(job.lastDate);
        const d2 = moment(Date.now());
        const diff = d1.diff(d2, 'days');
        if(diff < 0){
            setOutOfDate(true)
        }
        
    }, [])

    const applyToJobHandler = () => {
        applyToJob(id, accessToken);
        router.push('/applied')
      };

    const handleFavourite = () => {
        let config = {
            method: 'post',
            url: `${process.env.API_URL}/api/jobs/${id}/favorite/`,
            headers: { 
              'Authorization': `Bearer ${accessToken}`,
            }
          };
          axios.request(config)
            .then((response) => {
                const res =response.data;
                console.log(res.favorite)
                if(res.favorite === true){
                    setIsFavourite(true)
                }
                if(res.favorite === false){
                    setIsFavourite(false)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get(`${process.env.API_URL}/api/me/jobs/favorites/`, config)
        .then(res => {
            if(res.data.length !== 0){
                res.data.map(job => {
                    if(job.job.id === Number(id)){
                        setIsFavourite(true)
                    }
                })
            }
        })
    }, [isFavourite])


  return (
    <>
        {loading ? <Loader /> : error ? <NotFound /> :
        <div className="flex flex-wrap justify-between max-w-6xl mx-auto ml-6">
            <div className="job-post w-full md:w-8/12">
                <div className='flex items-center gap-1 text-sm'>
                    <FaArrowLeft /><button onClick={() => router.back()}>Back</button>
                </div>
            <div className="job-meta mb-4">
                <span className="text-xs text-gray-500">
                    Posted {moment(job.createdAt).fromNow()} by <span className="text-indigo-500 hover:underline">{job.company}</span>
                </span>

                <h1 className="job-title text-2xl">
                    {job.title}
                </h1>
          
                <span className="job-type bg-indigo-500 text-white p-1 text-xs mr-4">{job.jobType}</span>
                <span className="job-location text-xs">{job.address}</span>
                {job.remote ? <span className="remote-job text-xs ml-4">Remote Job</span> : <span className="remote-job text-xs ml-4">Hybrid</span> }
            </div>
            <span className=' text-lg text-indigo-500'>
                {candidates === 0 ? 'Be the first person to apply' : `Number of people applied ${candidates}`}
                
            </span>
            
            <br />
            {/* hidden only in medium or bigger screen*/}
            
            <div className="admin-controls block md:hidden text-sm mb-4 border-t border-b py-2">
                {applied && user.id !== job.user &&
                <p className='text-md text-green-600 mb-6'>
                    You have already applied for this job.
                </p>}
                {outOfDate && user.id !== job.user &&
                <p className='text-md text-red-600 mb-6'>
                    This job is out of date.
                </p>}
                {!isFavourite  && !outOfDate && user.id !== job.user && <button 
                    className="w-full bg-indigo-700 hover:bg-indigo-500 text-white text-center block rounded-full py-2 mb-4"
                    onClick={handleFavourite }
                >
                    Save to favourite
                </button>}
                {isFavourite  && !outOfDate && user.id !== job.user && <button 
                    className="w-full bg-indigo-700 hover:bg-indigo-500 text-white text-center block rounded-full py-2 mb-4"
                    onClick={handleFavourite }
                >
                    Remove from favourite
                </button>}
                { !applied && !outOfDate && user?.cv =='' && user.id !== job.user &&
                <p className='mb-6 border-b-2'>Please upload your Cv from <Link href={`/myprofile`} className='text-indigo-500'>My profile </Link>page to apply to this job</p>
                }
                <div className="controls">
                        <div className='gap-1 text-sm p-2'>
                            Apply Before : {moment(job.createdAt).add(5, 'M').format('MMMM Do YYYY')}
                        </div>
                        <div className='gap-1 text-sm p-2'>
                            Salary : $ {job.salary}
                        </div>
                        <div className='gap-1 text-sm p-2'>
                            Experience :   {job.experience === 'No Experience' ? 'No Experience Required' : job.experience}
                        </div>
                        <div className='gap-1 text-sm p-2'>
                            Education : {job.education}
                        </div>
                    </div>
            </div>
        
            <div className="job-description mb-4 mt-4">
                <p>{job.description}</p>
            </div>
            
            <div className='overflow:hidden w-full h-[500px] mb-6'>
                <Map
                    className="rounded-lg shadow-lg"
				    mapboxAccessToken={mapboxToken}
                    mapStyle={"mapbox://styles/mapbox/streets-v11"}
                    initialViewState={{
                        latitude: Number(job.point.split("(")[1].replace(")", "").split(" ")[1]),
                        longitude: Number(job.point.split("(")[1].replace(")", "").split(" ")[0]), 
                        zoom: 12
                    }}
                >
                    <GeolocateControl position="top-left" />
				    <NavigationControl position="top-left" />
                    <Marker
                        latitude={Number(job.point.split("(")[1].replace(")", "").split(" ")[1])}
                        longitude={Number(job.point.split("(")[1].replace(")", "").split(" ")[0])}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <div>
                            <IoLocationSharp className="text-indigo-500 text-2xl" />
                        </div>
                    </Marker>
                </Map>
            </div>  
            {
                !applied && !outOfDate && user?.cv !=='' && user.id !== job.user &&
                <button onClick={applyToJobHandler} className="w-full bg-indigo-700 hover:bg-teal-600 text-white text-center block rounded-full py-2 mt-4 mb-6">Apply for this job</button>
            }
            
            </div> 
            
            {/* visible only in medium or bigger screen*/}
            <div className="w-full hidden  md:block md:w-3/12">
                <div className="employer-info mb-32 text-center ">
                </div>
                { !applied && !outOfDate && user?.cv !=='' && user.id !== job.user &&
                <button onClick={applyToJobHandler} className="w-full bg-indigo-700 hover:bg-indigo-500 text-white text-center block rounded-full py-2 mb-4">Apply for this job</button>
                }
                { !applied && !outOfDate && user?.cv =='' && user.id !== job.user &&
                <p>Please upload your Cv from <Link href={`/myprofile`} className='text-indigo-500'>My profile </Link>page to apply to this job</p>
                }
                {!isFavourite && !outOfDate && user.id !== job.user && <button 
                    className="w-full bg-indigo-700 hover:bg-indigo-500 text-white text-center block rounded-full py-2 mb-4"
                    onClick={handleFavourite }
                >
                    Save to favourite
                </button>}
                {isFavourite && !outOfDate && user.id !== job.user && <button 
                    className="w-full bg-indigo-700 hover:bg-indigo-500 text-white text-center block rounded-full py-2 mb-4"
                    onClick={handleFavourite }
                >
                    Remove from favourite
                </button>}
                {applied && 
                <p className='w-full bg-indigo-200 text-green-600 mb-6'>
                    You have already applied for this job.
                </p>}
                {outOfDate &&
                <p className='w-full bg-indigo-200 text-red-600 mb-6'>
                    This job is out of date.
                </p>}
        
                <div className="admin-controls text-center text-sm border-gray-300 border-2">
                    {/* <h5 className="text-gray-700 mb-2 ">Info</h5> */}
                    <div className="controls">
                        <div className='gap-1 text-sm p-2'>
                            Apply Before : {moment(job.createdAt).add(5, 'M').format('MMMM Do YYYY')}
                        </div>
                        <div className='gap-1 text-sm p-2'>
                            Salary : $ {job.salary}
                        </div>
                        <div className='gap-1 text-sm p-2'>
                            Experience :   {job.experience === 'No Experience' ? 'No Experience Required' : job.experience}
                        </div>
                        <div className='gap-1 text-sm p-2'>
                            Education : {job.education}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>}
    </>
  )
}

export default page
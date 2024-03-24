import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { RotatingLines } from 'react-loader-spinner'

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
        setLoading(false);

    }, [])




    return (
        <div>
            <div className="">
                {
                    loading ?
                        <div className="flex justify-center items-center "> <RotatingLines
                            visible={true}
                            height="300"
                            width="400"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /></div> :
                        ''
                }
            </div>


            <div className="flex flex-col justify-center items-center space-y-4">
                <h1 className="text-4xl font-bold">Featured Jobs: {jobs.length}</h1>
                <p className="font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6  rounded-lg">
                {
                    jobs.slice(0, dataLength).map((job, index) => <Job
                        job={job}
                        key={index}></Job>)
                }

            </div>
            <div className={`text-center my-8
            ${dataLength === jobs.length ? 'hidden' : ''}
            `}>
                <button onClick={() => setDataLength(jobs.length)} className="btn text-white bg-gradient-to-r from-[#7e90fe] to-[#9873FF]">See All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;
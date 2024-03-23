import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {

        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));

    }, [])

   


    return (
        <div>
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
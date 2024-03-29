
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplicationInLs } from "../../utility/localstorage";
import { Helmet } from "react-helmet-async";





const AppliedJobs = () => {

    const jobs = useLoaderData();


    const [appliedJobs, setAppliedJobs] = useState([]);
    const [filterJobs, setFilterJobs] = useState([]);

    useEffect(() => {
        const getStoredJobApplicationIds = getStoredJobApplicationInLs();

        if (jobs.length > 0) {
            const jobApplication = jobs.filter(job => getStoredJobApplicationIds.includes(job.id))
            setAppliedJobs(jobApplication);
            setFilterJobs(jobApplication);
        }
    }, [jobs]);
    // console.log(filterJobs);
    // console.log(appliedJobs);

  




    const handleFilter = (filter) => {
        if (filter === 'all') {
            setFilterJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setFilterJobs(remoteJob);
        }
        else if(filter === 'onsite'){
            const onsiteJOb = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setFilterJobs(onsiteJOb);
        }
    }



    return (
        <div>
          

          <Helmet>
            <title>Job Nexus | Applied Jobs</title>
          </Helmet>
           



            <h1 className="text-4xl font-bold">Applied Jobs {appliedJobs.length}</h1>

            <div className="my-10">
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter('all')}><a>All</a></li>
                        <li onClick={() => handleFilter('remote')}><a>remote</a></li>
                        <li onClick={() => handleFilter('onsite')}><a>onsite</a></li>
                    </ul>
                </details>

            </div>


            <div className="my-4">
                {
                    filterJobs.map((job, index) => <div className="bg-red-200" key={index}>

                        <div className="my-7 py-4 px-4">
                            <p className="flex items-center gap-1"><span>{index + 1}.</span>{job.job_title}</p>
                            <img src={job.logo} alt="" />

                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;
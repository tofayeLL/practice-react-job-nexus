import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAppliedJobApplicationToLs } from "../../utility/localstorage";


const JobDetails = () => {


    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, contact_information, job_title } = job;



    const handleApplyNow = () => {
        saveAppliedJobApplicationToLs(job.id);
        toast.success("you have submitted successfully")

    }

    return (
        <div>
            <div className="bg-green-200 h-[20vh] text-center my-8">
                <h1 className="text-4xl font-bold">Job Details</h1>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6  ">
                <div className="col-span-3 bg-slate-500  space-y-8 p-8 text-white">

                    <h4>Job-Description: {job_description}</h4>
                    <p>Job-Responsibility: {job_responsibility}</p>
                </div>


                <div className="col-span-1 bg-purple-200 p-8 space-y-5">
                    <p>Job-Title: {job_title}</p>
                    <p>Phone: {contact_information.phone}</p>
                    <p>Email: {contact_information.email}</p>
                    <p>Address:  {contact_information.address}</p>
                    <div>
                        <button onClick={handleApplyNow} className="btn bg-green-400 w-full">Apply Now</button>
                    </div>
                </div>

            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetails;
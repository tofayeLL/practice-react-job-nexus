import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="bg-base-100 shadow-xl rounded-lg ">
                <figure className="p-6">
                    <img src={logo} alt="logo" className="rounded-xl" />
                </figure>

                <div className="p-6 space-y-4">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>

                    <div className="flex  items-center gap-6">
                        <button className="text-[#9576ff] px-4 py-2 border-[1px] border-[#9576ff] rounded-md font-semibold">{remote_or_onsite}</button>
                        <button className="text-[#9576ff] px-4 py-2 border-[1px] border-[#9576ff] rounded-md font-semibold">{job_type}</button>
                    </div>

                    <div className="flex  items-center gap-6">
                        <p className="flex items-center gap-2" >
                            <span>
                                <IoLocationOutline></IoLocationOutline>
                            </span>
                            {location}
                        </p>
                        <p className="flex items-center gap-2" >
                            <span> 
                                <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
                            </span>
                            {salary}
                        </p>

                    </div>
                    <div className="card-actions">

                       <Link to={`/job/${id}`}> <button className="btn text-white bg-gradient-to-r from-[#7e90fe] to-[#9873FF]">View Details</button></Link>

                    </div>
                </div>






            </div>
        </div>
    );
};

export default Job;
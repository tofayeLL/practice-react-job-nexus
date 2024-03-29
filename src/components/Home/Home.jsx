import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Job Nexus | Home</title>
            </Helmet>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
                        
        </div>
    );
};

export default Home;
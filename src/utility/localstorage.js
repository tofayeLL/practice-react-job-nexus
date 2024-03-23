
const getStoredJobApplicationInLs = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}



const saveAppliedJobApplicationToLs = (id) => {
    const storedJobApplication = getStoredJobApplicationInLs();
    const isExist = storedJobApplication.find(jobApplicationId => jobApplicationId === id);
    if (!isExist) {
        storedJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication))
    }

}
export { saveAppliedJobApplicationToLs, getStoredJobApplicationInLs }
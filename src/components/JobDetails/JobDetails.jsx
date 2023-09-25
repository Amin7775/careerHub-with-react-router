import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs=useLoaderData(); //get fetched data in jobs from json
    const {id} = useParams(); // get id by using params
    console.log(jobs,id);
    const intId= parseInt(id);
    const job = jobs.find(Job => Job.id === intId) //getting the selected id and its data
    const { logo,job_title,company_name,remote_or_onsite, location,job_type,salary}=job;
    console.log(job)
    return (
        <div>
            <h1>Job Details of :  {job_title}</h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2>Details Coming Here</h2>
                    <img className="w-64" src={logo} alt="" />
                    <p>Company Name : {company_name}</p>
                    <p>Job : {remote_or_onsite}</p>
                    <p>Location : {location}</p>
                    <p>Job Type: {job_type}</p>
                    <p>Salary : {salary}</p>
                </div>
                <div className="border grid-cols-1 flex flex-col p-2">
                    <h2 className="text-2xl text-center flex-grow">Side Things</h2>
                    <button className="btn btn-primary w-full my-2">Apply Job</button>
                </div>
            </div>
            <Link to={"/"}>GO BACK</Link>
        </div>
    );
};

export default JobDetails;
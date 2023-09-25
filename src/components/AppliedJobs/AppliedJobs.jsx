import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import Job from "../job/Job";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  // console.log(jobs)
  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // method 1
      // const jobsApplied = jobs.filter(job => storedJobsIds.includes(job.id))

      // method 2
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleJobs = filter =>{
    if(filter === 'all'){
        setDisplayJobs(appliedJobs);
    }
    else if(filter=== 'remote'){
        const remoteJobs = appliedJobs.filter(job=> job.remote_or_onsite === 'Remote');
        setDisplayJobs(remoteJobs);
    }else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(job=> job.remote_or_onsite === 'Onsite');
        setDisplayJobs(onsiteJobs)
    }
  }
  return (
    <div>
      <h2>Jobs I Applied</h2>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=> handleJobs('all')}>
            <a>All</a>
          </li>
          <li onClick={()=> handleJobs('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=> handleJobs('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <div className="grid grid-cols-2 gap-5">
        {displayJobs.map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

import { useEffect, useState } from "react";
import Job from "../job/Job";



const FeaturedJobs = () => {

    const [job, setJob]=useState([]);

    const [dataLength , setDatalength]=useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJob(data))
    },[])

    return (
        <div className=" text-center">
            <h2 className='text-5xl'>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-5">
                {
                    
                    job.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === job.length ? 'hidden':''}>

                <button className="btn btn-primary" onClick={()=> setDatalength(job.length)}>Show All</button>
            </div>
            <div className={dataLength === job.length? '':'hidden'}>
            <button className="btn btn-primary" onClick={()=> setDatalength(4)}>Show less</button>
            </div>
                
        </div>
    );
};

export default FeaturedJobs;
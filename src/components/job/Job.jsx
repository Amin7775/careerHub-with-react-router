import { CiLocationOn } from 'react-icons/ci';
import { AiFillDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
  const { id, logo,job_title,company_name,remote_or_onsite, location,job_type,salary } = job;
  return (
    <div>
      
      <div className="card card-compact w-full bg-base-100 shadow-xl text-left">
        <figure className="justify-start">
          <img
          className="w-40 justify-start"
            src={logo}
          />
        </figure>
        <div className="card-body space-y-1">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-3">
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
          </div>
          <div className='flex my-4 text-lg'>
            <p className='flex gap-1 items-center'><CiLocationOn className='text-xl'></CiLocationOn> {location}</p>
            <p className='flex gap-1 items-center'><AiFillDollarCircle className='text-xl'></AiFillDollarCircle> {salary}</p>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;

const Job = ({ job }) => {
  const { logo,job_title,company_name,remote_or_onsite, location,job_type,salary } = job;
  return (
    <div>
      
      <div className="card card-compact w-full bg-base-100 shadow-xl text-left">
        <figure className="justify-start">
          <img
          className="w-40 justify-start"
            src={logo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-3">
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;

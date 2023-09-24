

const Job = ({job}) => {
    const {logo}=job;
    return (
        <div>
            <img className="w-40" src={logo} alt="" />
        </div>
    );
};

export default Job;
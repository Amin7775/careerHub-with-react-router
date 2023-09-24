import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" flex items-center justify-center h-screen">
            <div className="text-center">

            <h1 className="text-3xl mb-10">Opps!!! Page Not Found!</h1>
            <br />
            <Link to={"/"} className="bg-red-600 p-5 text-white text-2xl font-medium">Go Back</Link>
            
            </div>
        </div>
    );
};

export default ErrorPage;
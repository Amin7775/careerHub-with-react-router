import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Root = () => {
    return (
        <div>
            hello kk
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
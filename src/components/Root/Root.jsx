import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div >
            <div className="container mx-auto lg:px-20 px-2 my-10">
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <div className="mt-32">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;
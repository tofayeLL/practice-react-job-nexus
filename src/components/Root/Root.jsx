import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { RotatingLines } from 'react-loader-spinner'
const Root = () => {

    const navigation = useNavigation();
    return (
        <div >
            <div className="container mx-auto lg:px-20 px-2 my-10">
                <Header></Header>

                {
                    navigation.state === "loading" ?
                        <div className="flex flex-col justify-center items-center">
                            <RotatingLines
                                visible={true}
                                height="300"
                                width="500"
                                color="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />

                        </div> :
                        <Outlet></Outlet>

                }


            </div>
            <div className="mt-32">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;
import { NavLink, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="flex flex-col justify-center items-center space-y-8 h-screen">
            <div>
                <h1 className="text-5xl font-bold">Oppsss !!!!!!!!!</h1>
            </div>
            

            <div>
            {
                error ?  <p>{error.error.message}</p>  : ''
            }
            </div>

            <div>
               <NavLink to={'/'}> <button className="btn">Go Back To Home</button></NavLink>
            </div>
            
        </div>
    );
};

export default ErrorPage;
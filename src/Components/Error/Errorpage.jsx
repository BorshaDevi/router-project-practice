import { Link, useRouteError } from "react-router-dom";


const Errorpage = () => {
    const error=useRouteError()
    console.log(error)
    return (
        <div>
            <h1>Oops!!!!</h1>
            {
               error.status === 404 && <div>
                <p>Go back your page</p> 
                <Link to='/'>Home</Link>
               
               </div> 
            }
        </div>
    );
};

export default Errorpage;
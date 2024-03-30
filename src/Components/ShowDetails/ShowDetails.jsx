import { useLoaderData } from "react-router-dom";


const ShowDetails = () => {
    const content=useLoaderData()
    const {name,id,email} =content
    return (
        <div>
            <h1>hello everyOne.</h1>
            <p>{name}</p>
            <p>{id}</p>
            <p>{email}</p>
        </div>
    );
};

export default ShowDetails;
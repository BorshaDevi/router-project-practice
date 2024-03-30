import { useLoaderData, useNavigate } from "react-router-dom";


const ShowComments = () => {
    const showComments=useLoaderData()
    const {name,email,body,id} =showComments
    const navigate=useNavigate()
    const handleGoBack=()=>{
         navigate(-1)
    }
    return (
        <div>
            <p>{id}</p>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}> Go back</button>
        </div>
    );
};

export default ShowComments;
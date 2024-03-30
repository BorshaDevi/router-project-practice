import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const ShowComments = () => {
    const showComments=useLoaderData()
    const {name,email,body,id} =showComments
    const navigate=useNavigate()
    const handleGoBack=()=>{
         navigate(-1)
    }
    const {moreCommentId}=useParams();
    console.log(moreCommentId)
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
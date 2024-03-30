import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ReadMore = () => {
    const readmore=useLoaderData()
    const {title,body,id}=readmore
    const navigate=useNavigate()
    const handleGoBack=()=>{
       navigate(-1)
    }
    const {readMoreId} =useParams();
    console.log(readMoreId)
    return (
        <div>
            <h2>{id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default ReadMore;
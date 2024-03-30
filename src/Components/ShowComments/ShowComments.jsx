import { useLoaderData } from "react-router-dom";


const ShowComments = () => {
    const showComments=useLoaderData()
    const {name,email,body,id} =showComments
    return (
        <div>
            <p>{id}</p>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default ShowComments;
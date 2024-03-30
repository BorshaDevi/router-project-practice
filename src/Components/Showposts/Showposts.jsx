import { useLoaderData } from "react-router-dom";


const Showposts = () => {
    const showpost=useLoaderData()
    const {name,email,website,phone}=showpost
    
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{website}</p>
            <p>{phone}</p>
        </div>
    );
};

export default Showposts;
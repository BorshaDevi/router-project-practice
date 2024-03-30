import { Link, useParams } from "react-router-dom";

const Allpost = ({allpost}) => {
   
    const {name,email,id}=allpost
   
    return (
        <div>
            <p>{id}</p>
            <h3>{name}</h3>
            <p>email:{email}</p>
            <Link to={`/postdetails/${id}`} >Show Details</Link>
        </div>
    );
};

export default Allpost;
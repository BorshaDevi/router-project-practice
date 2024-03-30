import { Link, useNavigate } from "react-router-dom";


const Comment = ({comment}) => {
    const {id,name} =comment
    const navigate=useNavigate()
    const handleMore=() =>{
          navigate(`/moreComment/${id}`)
    }
    return (
        <div>
            <h3>{id}</h3>
            <p>{name}</p>
            <Link to={`/moreComment/${id}`}>Show more comment</Link>
            <button onClick={handleMore}>Show more comment</button>
        </div>
    );
};

export default Comment;
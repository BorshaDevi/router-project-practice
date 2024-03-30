import { Link } from "react-router-dom";


const Comment = ({comment}) => {
    const {id,name} =comment
    return (
        <div>
            <h3>{id}</h3>
            <p>{name}</p>
            <Link to={`/moreComment/${id}`}>Show more comment</Link>
        </div>
    );
};

export default Comment;
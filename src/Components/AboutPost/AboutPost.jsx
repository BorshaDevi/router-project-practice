import { Link } from "react-router-dom";


const AboutPost = ({aboutPost}) => {
    const {id,title} =aboutPost
    return (
        <div>
            <h6>{id}</h6>
            <p>{title}</p>
            <Link to={`/readMore/${id}`}>Read more</Link>
        </div>
    );
};

export default AboutPost;
import { Link, useNavigate } from "react-router-dom";


const AboutPost = ({aboutPost}) => {
    const {id,title} =aboutPost
    const navigate=useNavigate()
    const handleReadMore=() =>{
            navigate(`/readMore/${id}`)
    }
    return (
        <div>
            <h6>{id}</h6>
            <p>{title}</p>
            <Link to={`/readMore/${id}`}>Read more</Link>
            <button onClick={handleReadMore}>Read More</button>
        </div>
    );
};

export default AboutPost;
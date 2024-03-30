import { Link } from "react-router-dom";


const Contact = ({contat}) => {
    const {name,email,id}=contat
    
    return (
        <div>
            
            <p>{name}</p>
            <p>{email}</p>
            <p>{id}</p>
            <Link to={`/Content/${id}`}>Show detalis</Link>
        </div>
    );
};

export default Contact;
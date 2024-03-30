import { Link } from "react-router-dom";


const BookLists = () => {
    return (
        <div>
            <ul>
                <li>menu.</li>
            <li>math</li>
            <li>physics</li>
            <li>chemistry</li>
            <Link to='/bookmore'>Show more</Link>
            </ul>
        </div>
    );
};

export default BookLists;
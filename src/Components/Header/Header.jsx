import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
             <Link to='/about'> About</Link>
             <Link to='/contant'>Contant</Link>
             <Link to='/menu'>Menu</Link>
             <Link to='/user'>User</Link>
             <Link to='/bookmarks'>Bookmarks</Link>
        </div>
    );
};

export default Header;
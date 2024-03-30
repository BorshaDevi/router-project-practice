import { Link, NavLink } from "react-router-dom";


const Header = () => {
    
    return (
        <div>
          
             <NavLink to='/about'>About</NavLink>
             
             <NavLink to='/contant'>Contant</NavLink>
             <Link to='/menu'>Menu</Link>
             <Link to='/user'>User</Link>
             <Link to='/bookmarks'>Bookmarks</Link>
             <Link to='/booklists'>BookLists</Link>
             
             <NavLink to='/posted'>All posts</NavLink>
             <NavLink to='/aboutList'>About list</NavLink>
             <NavLink to='/comments'>Comments</NavLink>
        </div>
    );
};

export default Header;
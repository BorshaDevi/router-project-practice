import { useLoaderData } from "react-router-dom";
import Allpost from "../Allpost/Allpost";


const AllPosts = () => {
    const allposts=useLoaderData()
    return (
        <div>
            <h1>Welcome</h1>
            {
                allposts.map((allpost) => <Allpost key={allpost.id} allpost={allpost}></Allpost> )
            }
        </div>
    );
};

export default AllPosts;
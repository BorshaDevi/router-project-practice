import { useLoaderData } from "react-router-dom";
import AboutPost from "../AboutPost/AboutPost";


const AboutPosts = () => {
    const aboutPosts =useLoaderData()
    return (
        <div>
           {
            aboutPosts.map((aboutPost) => <AboutPost key={aboutPost.id}aboutPost={aboutPost}></AboutPost> )
           }
        </div>
    );
};

export default AboutPosts;
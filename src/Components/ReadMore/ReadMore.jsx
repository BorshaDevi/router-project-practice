import { useLoaderData } from "react-router-dom";

const ReadMore = () => {
    const readmore=useLoaderData()
    const {title,body,id}=readmore
    return (
        <div>
            <h2>{id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default ReadMore;
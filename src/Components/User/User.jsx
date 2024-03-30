import { useLoaderData } from "react-router-dom";
import Use from "../Use/Use";

const User = () => {
    const user=useLoaderData()
    console.log(user)
    return (
        <div>
        <div>
            {
                user.map((use) => <Use key={use.id} use={use}></Use>)
            }
        </div>
            <h1>I am from user{user.length}.</h1>
        </div>
    );
};

export default User;
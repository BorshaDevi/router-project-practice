

const Use = ({use}) => {
    const {name,email,phone} =use
    return (
        <div>
            <h1>name:{name}</h1>
            <p>email:{email}</p>
            <p>Phone:{phone}</p>

        </div>
    );
};

export default Use;
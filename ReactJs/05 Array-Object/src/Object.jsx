function Object()
{
    const user = { firstName: "Jhon", lastName:"Doe", age:25 };
    function fullName(user){
        return user.firstName + " " + user.lastName;
    }

    const users = [
        { firstName: "Jhon", lastName:"Doe", age:25 },
        { firstName: "Akshay", lastName:"Kumar", age:35 },
        { firstName: "Salman", lastName:"Khan", age:38 }
    ]

    return(
        <>
            <div>
                <h2>Person Details  (Single Objects)</h2>
                {/* <p>Frst Name : {user.firstName}</p>
                <p>Last Name : {user.lastName}</p> */}

                <p>Full Name : {fullName(user)}</p>
                <p>Age       : {user.age}</p>
            </div>


            <div>
                <h2>Person Details (Multiple Objects)</h2>
                <ul>
                    {users.map((user,index) => (
                        <li key={index}>{fullName(user)} is {user.age} old</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Object;
function Props(props){

    const {name="Guest", age=18, city="Unknown", hobbies=[] } = props;

    return (
        <>
           {/* <div>
             <h1>Hello, {props.name}</h1>
                <p>Age  : {props.age}</p>
                <p>City : {props.city}</p>
           </div> */}


           <div>
                <h1>Hello, {name}</h1>
                <p>Age  : {age}</p>
                <p>City : {city}</p>
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
           </div>

        </>
    );

}

export default Props;
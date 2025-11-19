
function Hello()
{
    // function getName(yournaem)
    // {
    //     return yournaem;
    // }


    const getName = (yournaem) => {
        return yournaem;
    }

    const handleClick = () => {
        alert("Button was clicked")
    }

    const handleInput = (event) => {
        console.clear();
        console.log("Value : ", event.target.value)
    }

    const handleMouseOver = () => {
        console.log("Mouse is over the text")
    }

    const handleDoubleClick = () => {
        console.log("Text Double Clicked")
    }

    const name = "Rajesh Shaw";
    const name1 = "Rajesh";


    return (
        <>
            <h2>Hello, {getName(name)}</h2>
            <h3>Bye {getName(name1)}</h3>
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis.</p>
            <button style={{backgroundColor: "brown"}} onClick={handleClick}>Clcik Me</button>
            <br /><br />
            <button onClick ={ () => alert("Hello From inline funtion")} >Say Hello</button>
            <br /><br />
            <input type="text" onChange={handleInput} placeholder="Please Type Someting" />

        </>
    );
}

export default Hello;
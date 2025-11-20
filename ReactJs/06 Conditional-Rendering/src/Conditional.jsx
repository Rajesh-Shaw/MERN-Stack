import './App.css'

function Conditional(){
    const isLoggedIn = true;
    const hasMessage = true;
    const isVisible = true;

    let message;
    
    // if(isLoggedIn){
    //     message =  <h1>Welcome User!</h1>

    // }else{
    //     message = <h2>Please Login!</h2>
    // }

   { message = isLoggedIn ? <h1>Welcome User!</h1> : message = <h2>Please Login!</h2> };

    return(
        <>
            <div>{message}</div>
            <div>{hasMessage && <p>You have new message!</p> }</div>

            <div className={isVisible ? "visible" : "unvisible"}>
                <h1>Conditional Rendaring</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit reprehenderit assumenda impedit quaerat facere tenetur odit in fugiat nostrum?</p>
            </div>
        </>

    )

}

export default Conditional;
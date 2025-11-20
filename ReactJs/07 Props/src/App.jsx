import Props from "./Props"
import Button from "./Button";

function App() {

    const hobbies = ["Reading", "Coding", "Traveling"];
    const Message = () => {
      alert("Hello From Message Box")
    }

    const ByeMessage = () => {
      alert("Hello From Bye Message Box")
    }
      

  return (
    <>
      <Props name="Rajesh"  age={25} city="Howrah" hobbies={hobbies}/>
      <Button label="Click Me" handleClick={Message} />
      <Button label="Just Click" handleClick={ByeMessage} />



      {/* <Props name="Sham"  age={28} city="Kolkata"/>
      <Props name="Ram"  />
      <Props  /> */}


    </>
  )
}

export default App;

import reactLogo from './assets/react.svg'
import Hello from "./Hello";
import Bye from './Bye';

function App()
{
  return(
    <>
      <h1>App Component</h1>
      <Hello />
      <img src={reactLogo} alt="Logo" width="150px" />
      <Bye />
    </>
  );
} 

export default App;
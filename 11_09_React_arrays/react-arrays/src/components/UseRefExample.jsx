import { useRef } from "react";
function UseRefExample(props){
    //create a new ref, we ll assign it in our JSX
    //initializing to null
    const inputRef=useRef(null);
    const handleClick= () => {
        console.log(inputRef.current.value);
    }
return(
    <div>
        <input type = "text" ref={inputRef}/>
        <button onClick={handleClick}>Click me</button>
        </div>
)
}
export default UseRefExample;
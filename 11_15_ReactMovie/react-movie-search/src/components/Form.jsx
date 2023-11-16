import {useState ,useEffect} from 'react'

// Define a function 
//that is our component, always make sure to declare the props parameter
// so you can use props in your component
 function  Form (props){
    //add state to hold the data of the form
    //The component must return some JSX
    const [formData,setFormData] = useState({
        searchterm:"",
    })
    //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit =(event) =>{
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop (the method that will search)
    props.moviesearch(formData.searchterm);
  }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                 type ="text"
                 name="searchterm" 
                 onChange={handleChange}
                 value={formData.searchterm}
                 />
                <input type = "submit" value = "submit" />
            </form>
            <p>type in the movie to search for</p>
        </div>
    )
  };
  export default Form
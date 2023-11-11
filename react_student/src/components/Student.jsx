import Score from "./Score";

   function Student({studentObject}){
    return(
        <div>
            <h2>student name is:{studentObject.name}</h2>
            <div>student bio is:{studentObject.bio}</div>
            <div>
                {studentObject.scores.map((score,index) =>(
                     <Score scoreObject = {score} key = {index} />
                ))}
            </div>
        </div>
    )

    
   }
   export default Student;
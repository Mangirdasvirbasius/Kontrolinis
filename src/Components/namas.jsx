import { useState } from "react";
    const [task, setTask] = useState('');


function namas(){

}


    return(
        <>
       <form id="forma" action=""></form>
 Input the first side of the house:     <input type="text" name='x'  value={task} onChange={(event) => { setTask(event.target.value) }} /> <br></br>
 Input the hight:    <input type="text" name='y'value={task} onChange={(event) => { setTask(event.target.value) }}  /><br></br>
 Input the second side of the house:    <input type="text" name='z' value={task} onChange={(event) => { setTask(event.target.value) }} /><br />
 <button
         className="btn"
         onClick={namas}>Add</button>

</>
    )

export default namas
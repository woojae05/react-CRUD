import React,{useState} from "react";
import "../styles/Create.css";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setcCheckbox] = useState(false);

  const postData = e => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
  }

  return (
    <form>
      <div className="wrapper">
        <div className="inputBox">  
          <label>First Name</label>
          <br />
          <input 
           value={firstName}
           onChange={ e=> setFirstName(e.target.value)}
          type="text" placeholder="First Name"></input>
         
        </div>
        <div className="inputBox">
          <label>Last Name</label>
          <br />
          <input 
          value = {lastName}
          onChange = {e =>{
            setLastName(e.target.value)
          }}
          type="text" placeholder="Last Name" />
        </div>
        <div className="inputBox">
          <input 
          value = {checkbox}
          onChange = {e=>{setcCheckbox(!checkbox)}}
          id="agreeBox" type="checkbox" />
          <label for="agreeBox">I agree to the Conditions</label>
        </div>
        
        <div className="inputBox">
          <input
          onClick = {postData}
          type="submit" value="submit" />
        </div>
      </div>
    </form>
  );
}

export default Create;



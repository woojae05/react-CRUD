import React, { useState, useEffect } from "react";
import axios from "axios";

function Update() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id,setID] = useState(null);

  useEffect(()=>{
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("FirstName"));
    setLastName(localStorage.getItem("LastName"));
    setCheckbox(localStorage.getItem("chekbox Value")==="true");
  },[]);

  const postData= (e)=>{
    e.preventDefault();
    axios.
    put(`https://612c3261ab461c00178b5c25.mockapi.io/fakeData${id}`
    ,
    {
      firstName,
      lastName,
      checkbox,
  });
      };
  return (
    <form>
      <div className="wrapper">
        <div className="inputBox">
          <label>First Name</label>
          <br />
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
          ></input>
        </div>
        <div className="inputBox">
          <label>Last Name</label>
          <br />
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="inputBox">
          <input
            value={checkbox}
            onChange={(e) => setCheckbox(!checkbox)}
            id="agreeBox"
            type="checkbox"
          />
          <label for="agreeBox">I agree to the Conditions</label>
        </div>
        <div className="inputBox">
          <input onClick={postData} type="submit" value="Update" />
        </div>
      </div>
    </form>
  );
}

export default Update;


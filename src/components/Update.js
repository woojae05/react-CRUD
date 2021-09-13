import React, { useState, useEffect } from "react";
import axios from "axios";

function Update() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setID] = useState(null);
  const [checkbox, setCheckbox] = useState(false);
  let api=`https://612e28b3d11e5c00175583c4.mockapi.io/fakeData/${id}`
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    console.log(id);
    setFirstName(localStorage.getItem("FirstName"));
    setLastName(localStorage.getItem("Lastname"));
    setCheckbox(localStorage.getItem("checkbox") === "true");
  }, []);

  const postData = (e) => {
    e.preventDefault();
    axios.
      put(`https://612e28b3d11e5c00175583c4.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkbox,
      }).then(
        console.log(api),
        console.log(firstName)
      )

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
            checked={checkbox}
            onChange={(e) => {
              setCheckbox(!checkbox)
            }
            }
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


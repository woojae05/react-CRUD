import React, { useState, useEffect } from "react";
import "../styles/Read.css";
import axios from "axios";

function Read() {
  const [APIData, SetAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://612e28b3d11e5c00175583c4.mockapi.io/fakeData`)
      .then((response) => {
        // console.log(response.data);
        SetAPIData(response.data);
      })
      .catch((err)=>{
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Checked</th>
        </tr>
        {APIData.map((data) => {
          return (
            <tr>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.checkbox ? "true":"false"} </td>
            <td><button>edit</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}



export default Read;
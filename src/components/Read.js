import React, { useState, useEffect } from "react";
import "../styles/Read.css";
import axios from "axios";
import { Link } from 'react-router-dom';

function Read() {
  const [APIData, SetAPIData] = useState([]);
  const setData = (data)=>{
    let{id,firstName,lastName,checkbox} = data;
    localStorage.setItem('ID',id);
    localStorage.setItem('FirstName',firstName);
    localStorage.setItem('Lastname',lastName);
    localStorage.setItem('checkbox',checkbox);
  }

  const getData=()=>{
    axios
    .get(`https://612e28b3d11e5c00175583c4.mockapi.io/fakeData`)
    .then(response=>{
      SetAPIData(response.data);
    })
    
  }

  const onDelete=(id)=>{
    axios
    .delete(`https://612e28b3d11e5c00175583c4.mockapi.io/fakeData/${id}`)
    .then(()=>{
      getData();
    })
  }

  useEffect(() => {
    getData();
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
              <td>{data.checkbox ? "true" : "false"} </td>
              <Link to='/Update'>
              <td>
              <button onClick={()=>{setData(data)}}>Update</button>
              </td>
              </Link>
              <td>
                <button onClick={()=>onDelete(data.id)}>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}



export default Read;
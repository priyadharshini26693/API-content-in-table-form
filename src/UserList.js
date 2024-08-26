//mport { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';  
import UserTable from "./UserTable"; 

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);
  //const navigate=useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchPage1 = fetch("https://reqres.in/api/users?page=1").then(
      (response) => response.json()
    );
    const fetchPage2 = fetch("https://reqres.in/api/users?page=2").then(
      (response) => response.json()
    );

    Promise.all([fetchPage1, fetchPage2])
      .then(([page1, page2]) => {
        setUsers([...page1.data, ...page2.data]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // const handleRowClick=(id)=>{
  //   navigate(`/user/${id}`)
  // }

  return (
    <div className="App">
      {loading ? (
        <div> Loading... </div>
      ) : (
        <>
          <h1> User Details </h1>
          <UserTable users={users} />
        </>
      )}
    </div>
  );
}

export default UserList;

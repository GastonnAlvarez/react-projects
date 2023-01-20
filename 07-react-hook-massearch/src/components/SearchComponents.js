import React, { useEffect, useState } from "react";

const SearchComponents = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const url = `https://jsonplaceholder.typicode.com/users`;

  const showData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setUsers(data);
  };

  const searcher=(e)=>{
    setSearch(e.target.value);
  };

  let results = []

  if(!search){
    results = users;
  }else{
    results = users.filter((dato)=>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="form-control"
        value={search}
        onChange={searcher}
      />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso text-white">
            <th>NAME</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponents;

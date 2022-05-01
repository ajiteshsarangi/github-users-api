import React, { useState, useEffect } from "react";
import "./App.css";

const url = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };
  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  const getUsers = () => {};
  return (
    <div>
      <header>
        <div className="logo">LOGO</div>
        <nav>
          <ul className="nav_links">
            <li>
              {" "}
              <a>Home</a>{" "}
            </li>
            <li>
              {" "}
              <a>Services</a>
            </li>
            <li>
              {" "}
              <a>About</a>
            </li>
          </ul>
        </nav>
        <a className="cta" onClick={() => fetchUsers()}>
          Get Users
        </a>
      </header>
      <section className="card1">
        {users.map(({ id, login, avatar_url, html_url, followers_url }) => {
          return (
            <div className="box">
              <div
                className="profile"
                style={{ background: `url(${avatar_url})`, backgroundSize: "cover" }}
              ></div>
              <div className="card" key={id}>
                <div className="heading">{login.toUpperCase()}</div> <br />
                <div className="heading">
                  {" "}
                  <a href={html_url}>HTML URL</a>
                </div>{" "}
                <br />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;

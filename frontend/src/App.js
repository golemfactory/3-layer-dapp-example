import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function refreshPage() {
    window.location.reload(false);
    }

  const [message, setMessage] = useState();
  const startTime = Date.now();
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((res) => setMessage(`DB stores info about ${res.length} users`))
      .catch(console.error);
  }, [setMessage]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message || "Loading..."}</p>
        <p><button
          className="button"
          type="button"
          onClick={refreshPage}
        >
          Reload!
        </button>
        </p>
      </header>
    </div>
  );
}

export default App;

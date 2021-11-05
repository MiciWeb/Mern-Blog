import './App.css';

import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const data = { title, body };
    console.log(JSON.stringify(data))
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"  },
      body: JSON.stringify(data)
    }

    fetch("http://localhost:4242/register", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res))
      .catch(error => console.log(error))
  };

  return (
    <div className="App">
      <form>
        <input placeholder="Title" value={title}
          onChange={onTitleChange} required />
        <textarea placeholder="Body" value={body}
          onChange={onBodyChange} required />
        <button type="submit" onClick={handleSubmit}>
          Create Post
          </button>
      </form>
    </div>
  );
}

export default App;
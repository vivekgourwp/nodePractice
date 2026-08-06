// import { useState } from 'react';

import { useEffect, useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
  };

  return (
    <>
      <h4>Controlled Components</h4>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(eB) => setName(eB.target.value)}           
        />
        <button type="submit" disabled={name.trim() === ''}>Submit</button>
      </form>
    </>
  );
}

export default App;

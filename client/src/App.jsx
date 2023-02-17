import React, { useEffect, useState } from "react";
import { io } from 'socket.io-client';

function App() {
  const [socket, setSocket] = useState();
  useEffect(() => {
    setSocket(io('http://localhost:3001'))
  }, []);

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
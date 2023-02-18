import React, { useEffect, useState } from "react";
import LineChart from "./components/LineChart";
import { io } from 'socket.io-client';

function App() {
  const [socket, setSocket] = useState();
  const [missionTime, setMissionTime] = useState([]);
  const [altitude, setAltitude] = useState([]);

  useEffect(() => {
    setSocket(io('http://localhost:3001'))
  }, []);

  useEffect(() => {
    socket?.on('data', (data) => {
      // console.log(data)
      setMissionTime(prev => [...prev, data.missionTime]);
      setAltitude(prev => [...prev, data.altitude]);
    })
  }, [socket]);

  const handleButtonClick = (type) => {
    if(type === 'start')
      socket.emit('click', type);
    else if(type === 'stop')
      socket.emit('click', type);
  }

  return (
    <div className="App">
      <button className="bg-blue-500 hover:bg-blue-700 text-white ml-5 mt-5 font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('start')}>
        Start
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white ml-5 mt-5 font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('stop')}>
        Stop
      </button>
      <div className="w-[700px] h-[400px]">
        <LineChart 
          chartData={{ 
            labels: missionTime, 
            datasets: [{
              label: 'Altitude',
              data: altitude,
              backgroundColor: 'rgb(255, 96, 178, 0.8)',
              borderColor: 'rgb(255, 96, 178, 0.8)',
              pointBackgroundColor:'rgb(255, 96, 178, 0.8)',
            }]
          }}
        />
      </div>
    </div>
  );
}

export default App;
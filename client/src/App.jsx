import React, { useEffect, useState } from "react";
import { io } from 'socket.io-client';
import Model from "./components/3D Model/Model";
import Coordinates from "./components/Co-ordinates/Coordinates";
import CSV from "./components/CSV/CSV";
import Graphs from "./components/Graphs/Graphs";

function App() {
  const [socket, setSocket] = useState();
  const [component, setComponent] = useState('graphs');
  const [data, setData] = useState([]);
  const [missionTime, setMissionTime] = useState([]);
  const [altitude, setAltitude] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [voltage, setVoltage] = useState([]);
  const [pressure, setPressure] = useState([]);
  const [tiltX, setTiltX] = useState([]);
  const [tiltY, setTiltY] = useState([]);

  useEffect(() => {
    setSocket(io('http://localhost:3001'))
  }, []);

  useEffect(() => {
    socket?.on('data', (data) => {
      // console.log(data)
      setData(prev => [...prev, data]);
      setMissionTime(prev => [...prev, data.missionTime]);
      setAltitude(prev => [...prev, data.altitude]);
      setTemperature(prev => [...prev, data.temperature]);
      setVoltage(prev => [...prev, data.voltage]);
      setPressure(prev => [...prev, data.pressure]);
      setTiltX(prev => [...prev, data.tiltX]);
      setTiltY(prev => [...prev, data.tiltY]);
    });
  }, [socket]);

  const handleButtonClick = (type) => {
    if(type === 'start')
      socket.emit('click', type);
    else if(type === 'stop')
      socket.emit('click', type);
  }

  return (
    <div className="App">
      <div id="buttons">
        <button className="bg-blue-500 hover:bg-blue-700 text-white ml-5 mt-5 font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('start')}>
          Start
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white ml-5 mt-5 font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('stop')}>
          Stop
        </button>
      </div>
      
      <div id="components" className="pb-5">
        <button className="cursor-default ml-5 mt-5 font-bold py-2 px-4 text-white bg-purple-700 rounded hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" onClick={() => setComponent('graphs')} >
          Graphs
        </button>
        <button className="cursor-default ml-5 mt-5 font-bold py-2 px-4 text-white bg-purple-700 rounded hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" onClick={() => setComponent('csv')} >
          CSV
        </button>
        <button className="cursor-default ml-5 mt-5 font-bold py-2 px-4 text-white bg-purple-700 rounded hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" onClick={() => setComponent('co-ordinates')} >
          Co-ordinates
        </button>
        <button className="cursor-default ml-5 mt-5 font-bold py-2 px-4 text-white bg-purple-700 rounded hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" onClick={() => setComponent('3d-model')} >
          3D Model
        </button>
      </div>

      {/* Graphs */}
      { component === 'graphs' && (
        <Graphs missionTime={missionTime} altitude={altitude} temperature={temperature} voltage={voltage} pressure={pressure} tiltX={tiltX} tiltY={tiltY} />
      )}

      {/* CSV */}
      { component === 'csv' && (
        <CSV data={data} />
      )}

      {/* Co-ordinates */}
      { component === 'co-ordinates' && (
        <Coordinates />
      )}

      {/* 3D Model */}
      { component === '3d-model' && (
        <Model />
      )}
    </div>
  );
}

export default App;
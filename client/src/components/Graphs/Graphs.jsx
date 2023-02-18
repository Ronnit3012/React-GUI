import React from 'react';
import LineChart from "./Charts/LineChart";

const Graphs = ({ missionTime, altitude, temperature, voltage, pressure, tiltX, tiltY }) => {
    return (
        <section id="graphs" className='p-5'>
            <div className="grid grid-rows-2 grid-cols-2">
                <div className="w-[650px] h-[400px]">
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
                <div className="w-[650px] h-[400px]">
                    <LineChart 
                        chartData={{ 
                            labels: missionTime, 
                            datasets: [{
                                label: 'Temperature',
                                data: temperature,
                                backgroundColor: 'rgb(255, 96, 178, 0.8)',
                                borderColor: 'rgb(255, 96, 178, 0.8)',
                                pointBackgroundColor:'rgb(255, 96, 178, 0.8)',
                            }]
                        }}
                    />
                </div>
                <div className="w-[650px] h-[400px]">
                    <LineChart 
                        chartData={{ 
                            labels: missionTime, 
                            datasets: [{
                                label: 'Voltage',
                                data: voltage,
                                backgroundColor: 'rgb(255, 96, 178, 0.8)',
                                borderColor: 'rgb(255, 96, 178, 0.8)',
                                pointBackgroundColor:'rgb(255, 96, 178, 0.8)',
                            }]
                        }}
                    />
                </div>
                <div className="w-[650px] h-[400px]">
                    <LineChart 
                        chartData={{ 
                            labels: missionTime, 
                            datasets: [{
                                label: 'Pressure',
                                data: pressure,
                                backgroundColor: 'rgb(255, 96, 178, 0.8)',
                                borderColor: 'rgb(255, 96, 178, 0.8)',
                                pointBackgroundColor:'rgb(255, 96, 178, 0.8)',
                            }]
                        }}
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[650px] h-[400px]">
                    <LineChart 
                        chartData={{
                            labels: missionTime, 
                            datasets: [{
                                label: 'tiltX',
                                data: tiltX,
                                backgroundColor: 'rgb(255, 96, 178, 0.8)',
                                borderColor: 'rgb(255, 96, 178, 0.8)',
                                pointBackgroundColor:'rgb(255, 96, 178, 0.8)',
                            }, {
                                label: 'tiltY',
                                data: tiltY,
                                backgroundColor: 'rgb(255, 96, 178, 0.8)',
                                borderColor: 'rgb(255, 96, 178, 0.8)',
                                pointBackgroundColor:'rgb(255, 96, 178, 0.8)',
                            }]
                        }}
                    />
                </div>
            </div>
        </section>

    )
}

export default Graphs;
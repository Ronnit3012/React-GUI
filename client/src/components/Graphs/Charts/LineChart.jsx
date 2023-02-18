import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = ({ chartData }) => {
  return (
    <>
      <Line data={chartData}
      options={{
        legend: {
          display:true,
          labels: {
              fontColor: "#dedede",
              fontSize: 12,
              fontFamily: 'Monaco',
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        position:'left',
        align:'start',
        spanGaps: true,
        scales: {
          x: {
            title: {
              display: true, 
              text: 'Time',
            }
          },
          y: {
            title: {
              display: true, 
              text: 'metres',
            }
          },   
        },
        /* Chart Title */
        // plugins: {
        //   legend: {
        //     position: 'top',
        //   },
        //   title: {
        //     display: true,
        //     text: 'Altitude'
        //   }
        // }
      }} />
    </>
  )
}

export default LineChart;
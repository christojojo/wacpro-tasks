import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function LineChart() {
    const data = {
        labels: ['May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: '2023',
                backgroundColor: '#0C66E4',
                borderColor: '#0C66E4',
                borderWidth: 2,
                data: [10,10, 35, 41, 37], 
                pointRadius: 1,
            },
        ],
    };
    const options = {
        scales: {
            x: {                
                ticks: {
                    font: {
                        size: 11,
                        weight: 'normal',
                    },
                    color: '#666666',
                },
                grid: {
                    display: false,
                },
            },
            y: {                 
                ticks: {
                    stepSize: 10,
                    font: {
                        size: 11,
                        weight: 'normal',
                    },
                    color: '#666666',
                },
                beginAtZero: true,
                max: 50,
            },
        },
        plugins: {
            legend:{
                display:true,
                position : 'top',
                title : {
                    display : true,
                    text : 'Line Chart Example',
                },
                labels: {
                    boxWidth : 9,
                    boxHeight : 9,
                    align : 'center' ,
                     font: {
                        size: 12,
                        weight: 'normal',
                    },
                }
            },
            tooltip : {
                enabled : true,
            }
        }
      
    };

    return (
        <div style={{ width: '454px' }} className='line-chart'>
            <h2 className="text-[16px] font-medium pb-4">Simple Line Chart Example</h2>
            <Line data={data} options={options} />
        </div>
    );
    
}

export default LineChart;

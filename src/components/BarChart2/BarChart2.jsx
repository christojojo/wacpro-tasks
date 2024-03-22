import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart , registerables } from 'chart.js';

Chart.register(...registerables);

function BarChart2() {
    const data= {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul'],
        datasets: [
            {
               label: 'first Data',
               backgroundColor: 'rgba(255, 99, 132, 0.5)',            
               data: [157,77,430,348,523,249,78]
            },
            {
                label: 'Second Data',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',            
                data: [569,463,855,237,929,330,693]
            },
        ]
    }
  
  return (
    <div style={{width: '500px'}}>
      <h2 className='text-[16px] font-medium pb-4'>Barchart 2</h2>
      <Bar data={data}></Bar>
    </div>
  )
}

export default BarChart2



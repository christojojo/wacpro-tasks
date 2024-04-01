
import React from 'react';
import { Bar  } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

 Chart.register(...registerables);

function SimpleBarChart() {
    const data= {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug'],
    datasets: [
        {
        label: 'Sample Data',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [4,16,28,36,49,56,34,10]
        }
    ]
}
const options= {
  plugins : {
    tooltip : {
      enabled : true,
    }
  }
}
  return (
    <div>
      <h2 className='text-[16px]  font-medium pb-4'>Simple Bar Chart Example</h2>
      <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default SimpleBarChart

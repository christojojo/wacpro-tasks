import React from 'react'
import { Bar } from 'react-chartjs-2';

function BarChart3() {
    const data = {
        labels : [ 'A' , 'B' , 'C' , 'D','E','F'],
        datasets : [ 
            {
                label : 'sample data',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [2,10,7,22,20,12]
            }
        ]
    }
    const options = {
     scales : {
        x : {
            display : false,                
        },

        y : {
            display : true,
            ticks : {
                display : true,
                color : 'rgba(75,192,192,1)',                
            }
        }
     }
    }

  return (
    <div>
      <h1>Bar Chart Example testing</h1>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default BarChart3

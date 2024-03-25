import React from 'react'
import { Line } from 'react-chartjs-2'

function MultiLineChart() {

    const data = {
        labels : [ 'May' , 'June' , 'July' , 'Aug' ,'sept' , 'oct'],
        datasets : [
            {
                label : 'Paid',
                backgroundColor : '#0C66E4',
                borderColor : '#0C66E4',
                data : [20,20,35,35,42,31,36,30],
                pointRadius: 0,
            },
            {
                label : 'Organic', 
                backgroundColor : '#EC9B60',
                borderColor : '#EC9B60',
                data : [26,23,20,31,41,43,38,28,23,25],
                pointRadius: 0,
            }
        ]
    }
    const options = {
        scales : {    
            
            x : {    
                grid :{
                    display : false,
                },                                              
                ticks : {                    
                    font : {
                        size : 11,
                        weight : 'normal',
                    }
                },                                                                                                                                                                                                                                                                                                                                                                                                                  
            },
            y : {   
                                                      
                ticks : {
                    font : {
                        size: 11,
                        weight : 'normal',
                    },
                    stepSize : 10,
                },
                beginAtZero : true,
                max : 50,                              
            },         
        },
        plugins : {
            legend : {
                display : true,
                position : 'top',
                align : 'center',
                maxHeight : 36,
                textAlign : 'center',
                
                labels : {
                    boxWidth : 9,
                    boxHeight : 9,
                    padding :16,
                    color : '#666666',
                    font : {
                        size : 12,
                        weight : 'normal',
                    } 
                 }
            }
        }
    }
  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  )
}

export default MultiLineChart

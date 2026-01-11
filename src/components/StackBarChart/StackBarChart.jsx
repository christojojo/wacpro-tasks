    import React from 'react'
    import { Bar } from 'react-chartjs-2'
    import './stackedbarchart.css'

    function StackBarChart() {

    const data = {
        labels : [ 'June 15','July 15','Aug 15','Sept 15','Oct 15','Nov 15','Dec 15','Jan 15','Feb 15','Mar 15','Apr 15','May 15','June 15','July 15','Aug 15','Sept 15','Oct 15','Nov 15','Dec 15','Jan 15','Feb 15','Mar 15','Apr 15','June 15','July 15','Aug 15','Sept 15','Oct 15','Nov 15','Dec 15','Jan 15','Feb 15','Mar 15','Apr 15','May 15','Jun 15','July 15'],
        datasets : [
            {
                label : 'React',
                backgroundColor : '#FFC13D',
                data: [10,20,30,20,30,10,20,30,40,30,20,10,20,30,20,30,10,20,30,40,30,20,10,20,30,20,30,10,20,30,40,30,20,15,20,20,30,40,30,20,10]
            },
            {
                label : 'Design',
                backgroundColor : '#68BF30',
                data: [10,20,30,20,30,10,20,30,40,30,20,10,20,30,20,30,10,20,30,40,30,20,10,20,30,20,30,10,20,30,40,30,20,15,20,20,30,40,30,20,10]
            },
            {
                label : 'Wordpress',
                backgroundColor : '#2DB1FB',
                data: [10,20,30,20,30,10,20,30,40,30,20,10,20,30,20,30,10,20,30,40,30,20,10,20,30,20,30,10,20,30,40,30,20,15,20,20,30,40,30,20,10]
            },
            {
                label : 'BA',
                backgroundColor : '#8ECCFD',
                data: [10,20,30,20,30,10,20,30,40,30,20,10,20,30,20,30,10,20,30,40,30,20,10,20,30,20,30,10,20,30,40,30,20,15,20,20,30,40,30,20,10],
                borderRadius : 9,
            }
        ]
    }

    const options = {
        interaction: {
            mode: 'y',
        },
        scales : {        
            y : {
                min : 0,
                max : 300,
                stacked : true,
                ticks : {
                    stepSize : 100,
                    font: {
                        fontFamily: 'Inter',
                        size: 12,
                        weight: 'medium', 
                    },
                    color: '#767676',
                    padding: 11, 
                },
                grid: {
                    display: true,                 
                },
                display : true,
            },
            x : {
                display : true,
                stacked : true,
                ticks : {
                    // maxTicksLimit : 11,
                    font : {
                        fontFamily: 'Inter',
                    }
                },
                grid : {
                    display : false,
                    lineWidth : 10,
                },           
            }
        },
        plugins : {
            title : {
                fontFamily: 'Inter',
            },
            legend : {
                display : false,
                labels : {
                    fontFamily: 'Inter',
                }
            },
            tooltip : {
                enabled : true,
                backgroundColor : '#fff',
                titleColor : '#767676',
                titleFont : 'medium',
                bodyColor : '#000',
                padding : 8,  
                titleMarginBottom : 8,
                titleAlign : 'left'  ,
                borderColor: '#ccc', 
                borderWidth: 1,  
                mode : 'index',               
                callbacks: {
                    labelColor: function(context) {
                        return {
                            borderColor: 'transparent',
                            backgroundColor: context.dataset.backgroundColor,
                            borderWidth: 0,
                            borderRadius: 6,                            
                        };
                    },
                },     
            },         
        }
    }
    return (
        <div className='mt-24 w-full'>
            <div className='stackedbarchart flex gap-4 pb-4'>
                <div className='flex gap-[6px] items-start'>
                    <div className='relative'>
                    <input type="checkbox" id='react-checkbox' className='w-[15px] h-[15px] appearance-none mt-[2px]  border-[#8ECCFD] border rounded-[3px] checked:bg-[#8ECCFD] checked:border-[#8ECCFD]' />
                    <span className="material-symbols-outlined text-md absolute top-[3px] left-[1px] pointer-events-none text-white">check</span>
                    </div>
                    <label htmlFor="react-checkbox">
                        <div className='text-[14px] font-semibold text-[#111111] leading-[17px]'>
                            React
                        </div>
                        <div className='text-[12px] font-medium text-[#727272] leading-[17px]'>
                            200
                        </div>
                    </label>
                </div>
                <div className='flex gap-[6px] items-start'>
                    <div className='relative'>
                    <input type="checkbox" id='design-checkbox' className='mt-[2px] appearance-none w-[15px] h-[15px] border border-[#2DB1FB] rounded-[3px] checked:bg-[#2DB1FB] checked:border-[#2DB1FB]'/>
                    <span className='material-symbols-outlined text-md absolute top-[3px] left-0 text-white pointer-events-none'>check</span>
                    </div>
                    <label htmlFor="design-checkbox">
                        <div className='text-[14px] font-semibold text-[#111111] leading-[17px]'>
                            Design
                        </div>
                        <div className='text-[12px] font-medium text-[#727272] leading-[17px]'>
                            170
                        </div>
                    </label>
                </div>
                <div className='flex gap-[6px] items-start'>
                    <div className='relative'>
                    <input type="checkbox" id='wordpress-checkbox' className='mt-[2px] appearance-none w-[15px] h-[15px] border border-[#68BF30] rounded-[3px] checked:bg-[#68BF30] checked:border-[#68BF30]'/>
                    <span className='material-symbols-outlined text-md absolute top-[3px] left-[1px] text-white pointer-events-none'>check</span>
                    </div>
                    <label htmlFor="wordpress-checkbox">
                        <div className='text-[14px] font-semibold text-[#111111] leading-[17px]'>
                            Wordpress
                        </div>
                        <div className='text-[12px] font-medium text-[#727272] leading-[17px]'>
                            70
                        </div>
                    </label>
                </div>
                <div className='flex gap-[6px] items-start'>
                <div className='relative'>
                    <input type="checkbox" id='ba-checkbox' className='mt-[2px] appearance-none w-[15px] h-[15px] border border-[#FFC13D] rounded-[3px] checked:bg-[#FFC13D] checked:border-[#FFC13D]'/>
                    <span className='material-symbols-outlined text-md absolute top-[3px] left-[1px] text-white pointer-events-none'>check</span>
                    </div>
                    <label htmlFor="ba-checkbox">
                        <div className='text-[14px] font-semibold text-[#111111] leading-[17px]'>
                        Business analyst 
                        </div>
                        <div className='text-[12px] font-medium text-[#727272] leading-[17px]'>
                            40
                        </div>
                    </label> 
                </div>
            
            </div>
        <Bar data={data} options={options} width={'1550px'}></Bar>
        </div>
    )
    }

    export default StackBarChart



        
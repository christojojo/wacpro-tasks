import React from 'react'

function LineBarGraph() {

  const detailes = [ 
    {id:"1",Department:"UI",WorkingHours:"119",color:"#49AB0A"},
    {id:"2",Department:"React",WorkingHours:"68",color:"#8ECCFD"},
    {id:"3",Department:"Wordpress",WorkingHours:"65",color:"#14C8C8"},
    {id:"4",Department:"Python",WorkingHours:"124",color:"#FFC13C"},
    {id:"5",Department:"React",WorkingHours:"161",color:"#2DB1FB"},
  ]
  
  const TotalHours = '537' 

  return (

    <div className='pt-24'>      
      <ul className='navbargraph flex space-x-[3px] *:h-[10px] '>
      {detailes.map((item,index)=>{
        // console.log(item.WorkingHours);
        const widthLi = ((item.WorkingHours/TotalHours)*100).toFixed(1);
        // console.log(widthLi,"widthli");
        const bgColors = item.color;
        // console.log(bgColors);

        return(
          <li key={index}
          className={`bg-backgroundColor w-width first:rounded-l-lg last:rounded-r-lg relative group`}      
          style={{width: widthLi+"%", backgroundColor: bgColors}}        
          >
            <span className=' opacity-0 group-hover:opacity-100 text-[12px] p-[2px] rounded-sm border relative bottom-[27px] bg-slate-100 transition-all duration-200 ease-in-out z-50 whitespace-nowrap
                             after:content-[""] after:absolute after:bottom-[-5px] after:left-1 after:w-[8px] 
                              after:h-[8px] after:bg-slate-100 after:z-[-1] after:rotate-45'>
                                Value:{widthLi+"%"}                            
                            </span>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default LineBarGraph

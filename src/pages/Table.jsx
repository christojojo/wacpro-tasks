import React from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button'
import CheckboxDemo from '../components/CheckBox/CheckboxDemo'

function Table({isCheck=true}) {

  const TableData={
    titles:[
      {title : "Name"},
      {title : "Compinin"},
      {title : "Name"},
      {title : "Name"},
      {title : "Name"},
      {title : "Name"},
      {title : "Name"},
    ],
    list:[
      {
        data:[
          { text : "Anish Muhammad" },
          { text : "Muhammad Farzeen" },
          { text : "Ramees Muhammad" },
          { text : "devadhathan biju" },
          { text : "allen paulson" },
          { text : "zone Benny" },
          { text : "Anish Muhammad" },
        ]
      },
      {
        data:[
          { text : "Muhammad Farzeen" },
          { text : "allen paulson" },
          { text : "Anish Muhammad" },
          { text : "Anish Muhammad" },
          { text : "Muhammad Farzeen" },
          { text : "Anish Muhammad" },
          { text : "Anish Muhammad" },
        ]
      },

      {
        data:[
          { text : "Farzeen Muhammad" },
          { text : "Muhammad Farzeen" },
          { text : "Ramees Muhammad" },
          { text : "devadhathan biju" },
          { text : "allen paulson" },
          { text : "zone Benny" },
          { text : "Anish Muhammad" },
        ]
      },
    ]
  }

  return (
    <div className='mt-12 mr-[24px] w-screen'>
        <div className='flex gap-[16px] mb-[26px]'>
          <h1 className='text-[30px] font-bold'>Contacts</h1> 
          <button className='btn-primary px-[16px] py-[8px]' >Add Contact</button>
         </div>
         <div className='flex gap-[16px]'>
         <Input type={'search'} iconR='search' placeholder={'search this table'}   />
         <Button variant='secondary' classNames={'border '} icon={<img className='h-[18px] w-[18px]' src='../src/assets/icon-dark.svg' />}>Group</Button>
         </div>
         <div>
          <table className=''>
            <tbody>
              {/* <tr>
                <th className='w-[52px]'><CheckboxDemo variant={'checkbox-lg'}/></th>

                <th>Name</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Country</th>
                <th>Contact Owner</th>
                <th>Activity</th>

              </tr> */}


              <tr>
                {isCheck && <th className='w-[52px]'><CheckboxDemo variant={'checkbox-lg'}/></th>}

                {TableData.titles.map((item, index)=>{
                  return(
                    <th key={index}>{item.title}</th>
                  )
                })}

              </tr>


              {TableData.list.map((item, index)=>{
                  return(
                    <tr key={index}>
                     {isCheck && <td><CheckboxDemo variant={'checkbox-lg'}/></td>}
                      {item.data.map((td,index)=>{
                        return(
                          <td key={index}>{td.text}</td>
                        )
                      })}
                    </tr>
                  )
                })}


              {/* <tr>
                <td><CheckboxDemo variant={'checkbox-lg'}/></td>

                <td><a href="">Anish Muhammad</a></td>
                <td><a href="">Lulu Group</a></td>
                <td>+(255)-595-8393</td>
                <td>anish@lulumea.com</td>
                <td>UAE</td>
                <td>Ashneeja</td>
                <td>New Quotation #63545</td>

              </tr> */}
              {/* <tr>
                <td><CheckboxDemo variant={'checkbox-lg'}/></td>
                <td><a href="">Jacob Joseph</a></td>
                <td><a href="">IKEA Group</a></td>
                <td>+(255)-595-8393</td>
                <td>jacob@ikea.com</td>
                <td>India</td>
                <td>Abin</td>
                <td>Invoice due #7843</td>
              </tr>
              <tr>
                <td><CheckboxDemo variant={'checkbox-lg'}/></td>
                <td><a href="">Kevin James</a></td>
                <td><a href="">Joyalukkas</a></td>
                <td>+(255)-595-8393</td>
                <td>kevin@joyalukkas</td>
                <td>UAE</td>
                <td>Keerthi</td>
                <td>Invoice due #7843</td>
              </tr>
              <tr>
                <td><CheckboxDemo variant={'checkbox-lg'}/></td>
                <td><a href="">Janice rose john</a></td>
                <td><a href="">DHC Group</a></td>
                <td>+(255)-595-8393</td>
                <td>janice@dhc.com</td>
                <td>India</td>
                <td>Ajay</td>
                <td>Invoice </td>
              </tr>             
              <tr>
                <td><CheckboxDemo id={'age'} variant={'checkbox-lg'}/></td>
                <td><a href="">Anish Muhammad</a></td>
                <td><a href="">Lulu Group</a></td>
                <td>+(255)-595-8393</td>
                <td>anish@lulumea.com</td>
                <td>UAE</td>
                <td>Ashneeja</td>
                <td>New Quotation #63545</td>
              </tr>
              <tr>
                <td><CheckboxDemo variant={'checkbox-lg'}/></td>
                <td><a href="">Kevin James</a></td>
                <td><a href="">Joyalukkas</a></td>
                <td>+(255)-595-8393</td>
                <td>kevin@joyalukkas</td>
                <td>UAE</td>
                <td>Keerthi</td>
                <td>Invoice due #7843</td>
              </tr> */}
            </tbody>
          </table>
         </div>


         
    </div>
  )
}

export default Table

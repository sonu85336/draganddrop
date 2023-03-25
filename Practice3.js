import React from 'react'
import img1 from '../img/instax Cameras.webp'
import { useState } from 'react';
import { useRef } from 'react';
function Practice3() {
   
    const  [searchinput,setSearchinput]=  useState('')

    const [serchresult,setSearchResult]= useState([])
    const initialDetails = [
        {
          id: 1,
          imgPath: img1,
          name: "Jane Doe",
          email: "janedoe@gmail.com",
          address: "New Delhi, India",
        },
        {
          id: 2,
          imgPath:img1,
          name: "Mary Rosamund",
          email: "agra@rosie.com",
          address: "Tbilisi, India",
        },
        {
          id: 3,
          imgPath:img1,
          name: "Sherlock Watson",
          email: "irene@johnlock.com",
          address: "Baker Street, India",
        },
        {
          id: 4,
          imgPath:img1,
          name: "John Holmes",
          email: "mary@johnlock.com",
          address: "Baker Street, India",
        },
        {
          id: 5,
          imgPath:img1,
          name: "Mycroft Lestrade",
          email: "britishgovt@gmail.com",
          address: "London, India",
        },
      ];
     

      const searchHandler = (e)=>{ 
          const inpref =  e.target.value   
      if(!inpref)return
            
          console.log(inpref)
        
          setSearchinput(inpref)
          console.log(searchinput)
        if(searchinput!== ""){
            const newContact = initialDetails.filter((contact)=>{
            //     return Object.values(contact).join(' ').toLowerCase().includes(searchinput.toLowerCase())
            // })

            return contact.name.toLowerCase().includes(searchinput.toLowerCase())

           
        })
     setSearchResult(newContact)
    }
        else{
            setSearchResult(initialDetails)
        }
         
 
        }
         
 
  return (
    <div>
      <div>
        <input style={{outline:'1px solid',outlineColor:'plum',margin:'100px'}} type='text' className='propmt'    value={searchinput} onChange={searchHandler}/><button  >Search</button>
      </div>
  <div>
     
     {  searchinput.length <1 ? initialDetails.map((item,index)=>(
            <li key={item.id}>
                 <img src={item.imgPath}/> 
                <div>{item.name}</div>
                <div>{item.email}</div>
                <div>{item.address}</div>
            </li>
        )): serchresult.map((item,index)=>(
            <li key={item.id}>
                 <img src={item.imgPath}/> 
                <div>{item.name}</div>
                <div>{item.email}</div>
                <div>{item.address}</div>
            </li>
        ))}
      </div>
    </div>
  )
}

export default Practice3

import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[data,setdata]=useState("")
    var[inp,setInp]=useState(["ICTAK"])
    const inputhandle = (e)=>{
        setdata(e.target.value)
        console.log(data)
    }
    const add = () =>{
       setInp([...inp,data]) 
       console.log(inp)
       setdata("")
    }
    
  return (
    <div><br/><br/>
        <TextField variant='outlined' label="Enter your Name" onChange={inputhandle} value={data}/><br/><br/>
        <Button variant='contained' onClick={add}>Submit</Button>
        <ul>
            {inp.map((v)=>{
                return(
                    <li>{v}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Listmap
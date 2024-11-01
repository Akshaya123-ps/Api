import { AppBar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Newtable = () => {
    var[valu,Changename]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((display)=>{
        Changename(display.data)
        console.log(valu)
    })
  return (
    <div><br/><br/>
     <TableContainer  sx={{border:1}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell  sx={{fontWeight:'bold',fontSize:26}}>Id</TableCell>
                    <TableCell  sx={{fontWeight:'bold',fontSize:26}}>Title</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    valu.map((user)=>{
                        return(
                            <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.title}</TableCell>
                            
                        </TableRow>
                        )
                    })
                }
               
            </TableBody>
        </Table>
     </TableContainer>
    </div>
  )
}

export default Newtable
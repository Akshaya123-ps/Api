import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Usertable = () => {
    var[user,SetUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    
    .then((response)=>{
        SetUser(response.data)
        console.log(user)
    })
  return (
    <div><br/><br/>
     <TableContainer sx={{border:2}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{fontWeight:'bold',fontSize:26}}>Name</TableCell>
                    <TableCell sx={{fontWeight:'bold',fontSize:26}}>Email</TableCell>
                    <TableCell sx={{fontWeight:'bold',fontSize:26}}>City</TableCell>
                   
                </TableRow>

            </TableHead>
            <TableBody>
                { user.map((val)=>{
                        return (
                        <TableRow>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.email}</TableCell>
                            <TableCell>{val.address.city}</TableCell>
                           
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

export default Usertable
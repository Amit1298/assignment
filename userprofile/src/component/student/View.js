import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { Button} from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';



function View(){

  const {id} = useParams();
  console.log(id);

  const [student,setStudent] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    async function getStudent(){
      try{
          const student= await axios.get(`http://localhost:3333/students/${id}`)
          console.log(student.data);
          setStudent(student.data);
      }catch(error){
          console.log("Something is wrong")
      }
  }

    getStudent();
 },[id])

 

 const handleClick=()=>{
  navigate("/");
 }
    return(
        <>
        <Box textAlign="center" p={2} sx={{bgcolor:"#FFA726",color:"white"}}>
  <Typography variant="h4">Student Details</Typography>
  </Box>
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow style={{backgroundColor:"#616161"}}>
          <TableCell align="center" sx={{color:"white",fontWeight:"bold",fontSize:16}}>No</TableCell>
          <TableCell align="center" sx={{color:"white",fontWeight:"bold",fontSize:16}}>Name</TableCell>
          <TableCell align="center" sx={{color:"white",fontWeight:"bold",fontSize:16}}>Email</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">{student.id}</TableCell>
          <TableCell align="center">{student.stuname}</TableCell>
          <TableCell align="center">{student.email}</TableCell>
         
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  <Box m={3} textAlign="center">
    <Button variant="contained" onClick={handleClick}>Back to Home</Button>
  </Box>
        </>
    )
}

export default View;
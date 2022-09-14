import { Button, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import {useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';



function Edit(){
  const {id} = useParams();
  const navigate = useNavigate();
  const [student,setStudent] = useState({
    stuname:"",
    email:""
  });


  useEffect(()=>{
    async function getAllStudent(){
           try{
               const student= await axios.get(`http://localhost:3333/students/${id}`)
               console.log(student.data);
               setStudent(student.data);
           }catch(error){
               console.log("Something is wrong")
           }
       }
       getAllStudent();
      },[])

      function onTextFieldChange(e){
        setStudent({
          ...student,
          [e.target.name]: e.target.value
        })
        console.log(student);
          }

      async function onFormSubmit(e){
        e.preventDefault();
        try{
          await axios.put(`http://localhost:3333/students/${id}`,student)
        navigate("/");

        }catch(error){
          console.log("Something is Wrong")
        }
      }

      const handleClick=()=>{
        navigate("/");
       }
    return(
        <>
    <Box textAlign='center' sx={{bgcolor:'purple',color:'white'}} p={2} mb={2}>
        <Typography variant="h2" >React CURD API Call</Typography>
    </Box>
    <Grid container justifyContent="center" spacing={4}>
<Grid item md={6} xs={12}>
  <Box textAlign='center' p={2} sx={{bgcolor:'green',color:'white'}} mb={2}>
  <Typography variant='h4'>Edit Student</Typography>
  </Box>
<form>
  <Grid container spacing={2}>
  <Grid item xs={12} sm={6}>
      <TextField variant="outlined" autoComplete="id" name="id" required fullWidth label='ID' value={id} disabled id="id" autoFocus={true}/>
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField variant="outlined" autoComplete="stuname" name="stuname" required fullWidth label='Name' id="stuname" onChange={e=>onTextFieldChange(e)} value={student.stuname}/>
    </Grid>
    <Grid item xs={12}>
      <TextField variant="outlined" autoComplete="email" name="email" required fullWidth label='Email Address' onChange={e=>onTextFieldChange(e)} id="email" value={student.email}/>
    </Grid>
  </Grid>

  
    <Box m={3}>
      <Button type="submit" variant="contained" color="primary" fullWidth={true} onClick={e=>onFormSubmit(e)}>Update</Button>
    </Box>
</form>
<Box m={3} textAlign="center">
    <Button variant="contained" onClick={handleClick}>Back to Home</Button>
  </Box>
</Grid>


    </Grid>
    
    </>
    )
}

export default Edit;
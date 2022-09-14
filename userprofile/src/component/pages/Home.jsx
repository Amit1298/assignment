import { Button, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import List from '../student/List';
import axios from 'axios';
import {useState} from 'react';


const Home=()=> {
  const [student,setStudent] = useState({
    stuname:"",
    email:""
  });

  const [status,setStatus] = useState();

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
      await axios.post(`http://localhost:3333/students`,student)
      setStatus(true);
    }catch(error){
      console.log("Something is Wrong")
    }
  }
 
  if(status){
    return <Home/>
  }
  return (
    <>
    
    <Grid container justifyContent="center" spacing={4}>
<Grid item md={6} xs={12}>
  <Box textAlign='center' p={2} sx={{bgcolor:'green',color:'white'}} mb={2}>
  <Typography variant='h4'>Add Student</Typography>
  </Box>
<form noValidate>
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <TextField variant="outlined" autoComplete="stuname" name="stuname" required fullWidth label='Name' id="stuname" autoFocus onChange={e=>onTextFieldChange(e)}/>
    </Grid>
    <Grid item xs={12}>
      <TextField variant="outlined" autoComplete="email" name="email" required fullWidth label='Email' id="email" autoFocus onChange={e=>onTextFieldChange(e)}/>
    </Grid>
  </Grid>

    <Box m={3}>
      <Button type="submit" variant="contained" color="primary" fullWidth={true} onClick={e=>onFormSubmit(e)}>Add</Button>
    </Box>
</form>
</Grid>

<Grid item md={6} xs={12}>
  <List/>
</Grid>
    </Grid>
    </>
  )
}

export default Home; 
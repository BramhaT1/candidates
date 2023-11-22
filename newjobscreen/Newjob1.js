import React, { useState,useEffect } from 'react';
import './Newjob.css';
import axios from 'axios'
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

// function New() {
//   const classes = useStyles();

//   const [jobTitle, setJobTitle] = useState('');
//   const [jobDescription, setJobDescription] = useState('');
//   const [payscale, setPayscale] = useState('');
//   const [experienceLevel, setExperienceLevel] = useState('');
//   const [skillsRequired, setSkillsRequired] = useState('');
//   const [skillsMatrix, setSkillsMatrix] = useState('');







//   useEffect (()=>{
 
//     if(text) {
//     axios.post('http://localhost:4000/addUser', {
//       name:text
//     })
//     .then(function (response) {
//       console.log(response);
//       setText()
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }
 
//   },[onClicked])
//   const handleSave = () => {
//     console.log(jobTitle, jobDescription, payscale, experienceLevel, skillsRequired, skillsMatrix);
//   };

//   return (
//     <Container className={classes.root}>
//       <br></br>
// <br></br>
//       <Typography variant="h5">Create New Job</Typography>
//       <br></br>
// <br></br>

//       <Grid container spacing={3} className={classes.input}>
//         <Grid item xs={6}>
//           <TextField
//             label="Job Title"
//             fullWidth
//             onChange={(e) => setJobTitle(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField label="Number of Positions" fullWidth />
//         </Grid>
//       </Grid>
// <br></br>
// <br></br>
//       <div className={classes.input}>
//         <label>Job Description</label>
//         <ReactQuill
//           placeholder="Enter job description here"
//           onChange={(value) => setJobDescription(value)}
//           modules={{
//             toolbar: [
//               ['bold', 'italic', 'underline', 'strike'],
//               [{ list: 'ordered' }, { list: 'bullet' }],
//               ['link', 'image'],
//               ['clean'],
//             ],
//           }}
//           formats={[
//             'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
//             'list', 'bullet', 'indent', 'link', 'image',
//           ]}
//         />
//       </div>
//       <br></br>
// <br></br>

//       <Grid container spacing={3} className={classes.input}>
//         <Grid item xs={6}>
//           <TextField
//             label="Pay Scale"
//             fullWidth
//             onChange={(e) => setPayscale(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Experience Level"
//             fullWidth
//             onChange={(e) => setExperienceLevel(e.target.value)}
//           />
//         </Grid>
//       </Grid>
//       <br></br>
// <br></br>

//       <TextField
//         label="Skill Requirement"
//         fullWidth
//         onChange={(e) => setSkillsRequired(e.target.value)}
//         className={classes.input}
//       />
//       <br></br>
// <br></br>

//       <TextField
//         label="Skill Matrix-Important"
//         fullWidth
//         onChange={(e) => setSkillsMatrix(e.target.value)}
//         className={classes.input}
//       />
//       <br></br>
// <br></br>
      
//        <Button className={classes.button} variant="contained" onClick={handleSave}>
//         Save
//       </Button>
//     </Container>
//   );
// }

// export default New;


function New() {
  const classes = useStyles();

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [payscale, setPayscale] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');
  const [skillsMatrix, setSkillsMatrix] = useState('');

  const handleSave = () => {
    const formData = {
      jobTitle,
      jobDescription,
      payscale,
      experienceLevel,
      skillsRequired,
      skillsMatrix,
    };
    console.log(formData);

    // Send data to the server
    axios.post('http://localhost:4000/addUser', {
      jobTitle:jobTitle,
                    jobDescription:jobDescription,
                    payscale:payscale,
                    experienceLevel:experienceLevel,
                    skillsRequired:skillsRequired,
                    skillsMatrix:skillsMatrix
    })
      .then(function (response) {
        console.log(response);
        // Handle success, e.g., show a success message to the user
      })
      .catch(function (error) {
        console.log(error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return ( <Container className={classes.root}>
    <br></br>
<br></br>
    <Typography variant="h5">Create New Job</Typography>
    <br></br>
<br></br>

    <Grid container spacing={3} className={classes.input}>
      <Grid item xs={6}>
        <TextField
          label="Job Title"
          fullWidth
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Number of Positions" fullWidth />
      </Grid>
    </Grid>
<br></br>
<br></br>
    <div className={classes.input}>
      <label>Job Description</label>
      <ReactQuill
        placeholder="Enter job description here"
        onChange={(value) => setJobDescription(value)}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
        formats={[
          'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet', 'indent', 'link', 'image',
        ]}
      />
    </div>
    <br></br>
<br></br>

    <Grid container spacing={3} className={classes.input}>
      <Grid item xs={6}>
        <TextField
          label="Pay Scale"
          fullWidth
          onChange={(e) => setPayscale(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Experience Level"
          fullWidth
          onChange={(e) => setExperienceLevel(e.target.value)}
        />
      </Grid>
    </Grid>
    <br></br>
<br></br>

    <TextField
      label="Skill Requirement"
      fullWidth
      onChange={(e) => setSkillsRequired(e.target.value)}
      className={classes.input}
    />
    <br></br>
<br></br>

    <TextField
      label="Skill Matrix-Important"
      fullWidth
      onChange={(e) => setSkillsMatrix(e.target.value)}
      className={classes.input}
    />
    <br></br>
<br></br>
    
  



    <Button className={classes.button} variant="contained" onClick={handleSave}>
      Save
    </Button>
    </Container>
  );
}

export default New;
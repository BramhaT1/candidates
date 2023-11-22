// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';


// import { styled } from '@mui/system';

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

// export function Jobportal() {
//   const [jobtitle, setJobTitle] = useState('');
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState('');
//   const [skillDropdown, setSkillDropdown] = useState('');
//   const [education, setEducation] = useState('');
//   const [workExp, setWorkExp] = useState('');
//   const [contactNumber, setContactNumber] = useState('');

//   const handleApply = () => {
//     console.log(jobtitle, email, location, skillDropdown, education, workExp, contactNumber);
//     // Add logic to post data to Prisma URL
//   };

//   return (
//     <div className='job'>
//       <div className='job-info'>
//         <h1>Apply For Role - Job #101</h1>

//         <div className='job-title'>
//           <label>Job title</label>
//           <TextField
//             id="outlined-basic"
//             label="Job Title"
//             variant="outlined"
//             size="small"
//             value={jobtitle}
//             onChange={(e) => setJobTitle(e.target.value)}
//           />
//         </div>

//         <div className='jd'>
//           <label>Job Description</label>
//           <input
//             type='text'
//             id='job_description'
//             className='input_text'
//             value={"default"}
//             disabled
//             onChange={(e) => {
//               // Update logic if needed
//             }}
//           />
//         </div>

//         {/* ... Other input fields ... */}

//         <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
//           <InputLabel id="demo-customized-select-native">Skill</InputLabel>
//           <Select
//             labelId="demo-customized-select-native"
//             id="demo-customized-select"
//             value={skillDropdown}
//             label="Skill"
//             onChange={(e) => setSkillDropdown(e.target.value)}
//           >
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={10}>Ten</MenuItem>
//             <MenuItem value={20}>Twenty</MenuItem>
//             <MenuItem value={30}>Thirty</MenuItem>
//           </Select>
//         </FormControl>

//         {/* ... Other input fields ... */}

//         <Button size="small" variant="contained" onClick={handleApply}>
//           Apply
//         </Button>
//       </div>

//       {/* ... Your existing JSX for personal-info ... */}
//     </div>
//   );
// }

import axios from 'axios'

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const VisuallyHiddenInput = () => (
  <input
    type="file"
    style={{
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    }}
  />
);

const JobPortal = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [skillDropdown, setSkillDropdown] = useState('');
  const [education, setEducation] = useState('');
  const [workExp, setWorkExp] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [skillRequirement, setSkillRequirement] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleApply = () => {
    const formData = {
      jobTitle,
      jobDescription,
      name,
      email,
      location,
      skillDropdown,
      education,
      workExp,
      experienceLevel,
      skillRequirement,
      contactNumber
    };
    console.log(formData);

    // Send data to the server
    axios.post('http://localhost:4000/addapplicant', {
        jobTitle:jobTitle,
      jobDescription:jobDescription,
      name:name,
      email:email,
      location:location,
      skillDropdown:skillDropdown,
      education:education,
      workExp:workExp,
      experienceLevel:experienceLevel,
      skillRequirement:skillRequirement,
      contactNumber:contactNumber
      
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

  return (
    <div className='job'>
    <div className='job-info'>
      <h1>Apply For Role - Job #101</h1>

      <Grid container spacing={10}>
        <Grid item xs={2}>
          <div className='jd'>
            <label>Job Description</label>
            <TextField
              type='text'
              id='job_description'
              className='input_text'
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className='name'>
            <label>Name</label>
            <TextField
              type='text'
              id='input_name'
              className='input_text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </Grid>

        {/* Add other Grid items for additional fields */}

        <Grid item xs={12}>
          <div className='education'>
            <label>Education</label>
            <div className='input-and-btn'>
              <TextField
                type='text'
                id='input_education'
                className='input_text'
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
              <Button variant="contained" size="small">
                +
              </Button>
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className='work-exp'>
            <label>Work Experience</label>
            <div className='input-and-btn'>
              <TextField
                type='text'
                id='input_work_exp'
                className='input_text'
                value={workExp}
                onChange={(e) => setWorkExp(e.target.value)}
              />
              <Button variant="contained" href="#contained-buttons" size="small">
                +
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>

    <div className='personal-info'>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className='exp'>
            <label>Experience Level</label>
            <TextField
              type='text'
              id='experience_level'
              className='input_text'
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='skill-req'>
            <label>Skill Requirements</label>
            <TextField
              type='text'
              id='job_description'
              className='input_text'
              value={skillRequirement}
              onChange={(e) => setSkillRequirement(e.target.value)}
            />
          </div>
        </Grid>

        {/* Add other Grid items for additional fields */}

        <Grid item xs={12}>
          <div className='resume'>
            <label>Resume Upload</label>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Upload file
              <VisuallyHiddenInput />
            </Button>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className='contact-num'>
            <label>Contact Number</label>
            <TextField
              type='text'
              id='input_resume'
              className='input_text'
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div>
            <Button size="small" variant='contained' onClick={handleApply}>
              Apply
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
    
  );
};

export default JobPortal;

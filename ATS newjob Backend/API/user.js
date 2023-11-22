const { PrismaClient } =require('@prisma/client');
const prisma = new PrismaClient();
const addUser = async (req, res)=>{
 
 
 
    // res.send("Hellooo It is Add");
    try {
         let jobTitle = req.body.jobTitle;
         let jobDescription=req.body.jobDescription;
         let payscale=req.body.payscale ;
          let experienceLevel=req.body.experienceLevel;
          let skillsRequired=req.body.skillsRequired;
          let skillsMatrix=req.body.skillsMatrix

           
             const allUsers = await prisma.ApplyJob.create({
                  data: {
                
                    jobTitle:jobTitle,
                    jobDescription:jobDescription,
                    payscale:payscale,
                    experienceLevel:Number(experienceLevel),
                    skillsRequired:skillsRequired,
                    skillsMatrix:skillsMatrix
                      

                  }
             });
             res.send(allUsers);
    }
    catch(e){
      console.log(e)
          res.send(e)
    }
   
    }
    const addapplicant = async (req, res)=>{
 
 
 
      // res.send("Hellooo It is Add");
      try {
    
      let jobTitle=req.body.jobTitle;
      let jobDescription=req.body.jobDescription;
      let name=req.body.name;
      let email=req.body.email;
      let location=req.body.location;
      let skillDropdown=req.body.skillDropdown;
      let education=req.body.education;
      let workExp=req.body.workExp;
      let experienceLevel=req.body.experienceLevel;
      let skillRequirement=req.body.skillRequirement;
      let contactNumber=req.body.contactNumber
  
             
               const allUsers = await prisma.Application.create({
                    data: {
                  
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
                        
  
                    }
               });
               res.send(allUsers);
      }
      catch(e){
        console.log(e)
            res.send(e)
      }
     
      }
 
    module.exports.user ={addUser ,addapplicant};
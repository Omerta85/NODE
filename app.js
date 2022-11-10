const fs = require('node:fs');
const builder = require('./students/createstudents')

fs.readdir('students/girls',(err, files)=>{
    for (let file of files){
        fs.readFile(`students/girls/${file}`,(err1,data)=>{
            const gender = JSON.parse(data.toString()).gender
            if (gender === 'male'){
                fs.rename(`students/girls/${file}`,`students/boys/${file}`,(err2)=>{
                    console.log(err2);
                } )
            }
        })
    }
})

fs.readdir('students/boys',(err, files)=>{
    for (let file of files ){
        fs.readFile(`students/boys/${file}`,(err1,data)=>{
            const gender = JSON.parse(data.toString()).gender;
            if(gender === 'female'){
                fs.readFile(`students/boys/${file}`, `students/girls/${file}`, (err2)=>{
                    console.log(err2);
                })
            }
        })
    }
})

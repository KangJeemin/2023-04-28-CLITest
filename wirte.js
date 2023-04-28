import fs from 'fs'

fs.writeFile("test.txt","zz",(err)=>{
  if(err)
  throw err
});
import fs from 'fs'

fs.writeFile("./result/test.txt","zz",(err)=>{
  if(err)
  throw err
});
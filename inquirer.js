import inquirer from "inquirer";
import fs from 'fs'



inquirer
  .prompt([
      {
          type:'input',
          name:'name',
          message:"파일 이름을 입력해주세요"
      },
      {
          type:'confirm',
          name:'confirm',
          message: '최상단에 root태그를 만들까요?',
      },
      {
          type:'input',
          name:'text',
          message:'p태그에 들어갈 텍스트를 입력해주세요'
      },
  ])
  .then((answers)=>{
    
    if(answers.confirm==true){
      let text=`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="root">
          <p>${answers.text}</p>
        </div>
      </body>
      </html>`  
        fs.writeFileSync('./result/'+answers.name,text,(err)=>{
          if(err){
            console.log("에러 발생")
          }
        })
    }
    else{
      let text=`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
      <p>${answers.text}</p>
      </body>
      </html>`  
        fs.writeFileSync('./result/'+answers.name,text,(err)=>{
          if(err){
            console.log("에러 발생")
          }
        })
    }
  });
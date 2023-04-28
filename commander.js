import {Command} from 'commander'
const program = new Command();

program
  .version('0.0.1','-v,--version')
  .usage(['의 사용법 입니다.'])
program
  .option('-n,--name <name>','file name.html이 만들어질 예정','강지민.html')
  .option('-c,--compress','root태그 생성 여부',false)
  .option('-d,--directory <name>','생성 경로를 입력하세요','./result')
  .option('-t,--text <name>','본문<p>태그의 내용 작성',"ㅋㅋ")
  .parse()
  
  if(program.opts().compress==true){
    console.log(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root"></div>
      <p>${program.opts().text}</p>
    </body>
    </html>`)
  }

  console.log(program.opts());
  






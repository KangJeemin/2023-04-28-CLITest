import {Command} from 'commander'
const program = new Command();

program
  .version('0.0.1','-v,--version')
  .usage(['의 사용법 입니다.'])
program
  .option('-n,--name <name>','file name.html이 만들어질 예정','강지민.html')
  .option('-c,--compress','root태그 생성 여부','예')
  .option('-d,--directory <name>','생성 경로를 입력하세요','./')
  .parse()
  

  console.log(program.opts());
  console.log(program.opts().name);
  console.log(program.opts().compress);
  console.log(program.opts().directory);






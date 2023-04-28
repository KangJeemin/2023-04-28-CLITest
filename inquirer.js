import inquirer from "inquirer";

function exampleOne(array) {
  let suffiledArray=[];
  let lastarray =array[array.length-1]
  for(let i =0;i<array.length-1;i++){
      suffiledArray.push(array[i])
  }
  suffiledArray.sort(()=>Math.random()-0.5);
  suffiledArray.push(lastarray);
  


  //? Q.1 랜덤으로 배열의 인덱스를 셔플(섞어) 내는 함수 로직을 작성하세요.
  //? 단, 마지막 confirm은 항상 마지막 인덱스여야 한다.
  return suffiledArray;
}
//? Q.2 아래에 작성된 .prompt()는 인자로 배열을 요구,
//? 위의 작성한 exampleOne을 활용하여 입력 데이터를 실행할 때마다 섞어 출력하도록 해라
//? 공부법으로 유명한 flash card의 주요 코어로직입니다. 

inquirer
  .prompt([
      {
          type:'input',
          name:'name',
          message:"당신의 이름은 무엇입니까?"
      },
      {
          type:'list',
          name:'like food',
          message: '당신이 좋아하는 음식은 무엇입니까?',
          choices:['바나나우유','딸기우유','초코우유','그냥우유'],
      },
      {
          type:'confirm',
          name:'confirm',
          message:'확실합니까?'
      },
  ])
  .then((answers)=>{
      console.log('Answers:',answers);
  });
// var age = 12  
// function scope(){
//   var name = 'Farhan'
//   console.log(name)
//   if(true){
//     console.log(name)
//   }
// }
// console.log(scope())


function isBlock(){
  if(true){
  let name = 'Farhan'
  const PI = 3.14
    console.log(name,PI)
  }
  console.log(name)
}
isBlock()
